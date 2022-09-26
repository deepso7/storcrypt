import { ethers } from "ethers";
import { SiweMessage } from "siwe";
import axios from "axios";

import { ExternalProvider } from "@ethersproject/providers";
import { sign } from "crypto";
import UAuth from "@uauth/js";
declare global {
  interface Window {
    ethereum?: ExternalProvider;
  }
}

const lensLogin = async () => {
  try {
    if (!window.ethereum) throw new Error("no wallet found");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider?.getSigner();
    const address = await signer.getAddress();

    const { data: lens } = await axios.request({
      method: "GET",
      url: `https://api.nftport.xyz/v0/accounts/${address}?chain=polygon&contract_address=0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "2e0cc1de-7253-4d3b-80c0-7093ee89fb4c",
      },
    });

    const lensprofiles =
      lens?.nfts?.map(({ name }: { name: string }) => name) || [];
    if (!lensprofiles[0]) throw new Error("User do not own lens profile");
    const {
      data: {
        data: { challenge },
      },
    } = await axios.request({
      method: "POST",
      url: "https://api.lens.dev/",
      headers: { "Content-Type": "application/json" },
      data: {
        query: `query Challenge($request: ChallengeRequest!) {
        challenge(request: $request) { text }
      }`,
        variables: {
          request: { address },
        },
      },
    });

    const signature = await signer.signMessage(challenge.text);

    console.log({ address, g: lensprofiles[0] });

    return { address, did: lensprofiles[0] };
  } catch (e) {
    console.error(e);
    // return { address: "", did: "" };
    throw new Error("Wallet Connection Error");
  }
};

const udLogin = async () => {
  const uauth = new UAuth({
    clientID: "143f21aa-3271-4ada-9fb7-99a5794c0060",
    redirectUri: "https://storcrypt.vercel.app",
    scope: "openid wallet",
  });

  try {
    const authorization = await uauth.loginWithPopup();

    const {
      idToken: { wallet_address, sub },
    } = authorization;
    const { idToken } = authorization;

    if (!wallet_address || !sub) throw new Error("login not successful");

    return { address: wallet_address, did: sub };
  } catch (error) {
    console.error(error);
    // return { address: "", did: "" };
    throw new Error("Wallet Connection Error");
  }
};

const siweLogin = async () => {
  try {
    const domain = window.location.host;
    const origin = window.location.origin;

    if (!window.ethereum) throw new Error("no wallet found");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    await provider
      .send("eth_requestAccounts", [])

      .catch(() => console.log("user rejected request"));

    const address = await signer.getAddress();

    const statement = "Sign in with Ethereum to the app.";

    const message = new SiweMessage({
      domain,
      address,
      statement,
      uri: origin,
      version: "1",
      chainId: 1,
    });

    await signer.signMessage(JSON.stringify(message));

    const name = await provider?.lookupAddress(address);

    if (!name) return { address, did: "" };

    // console.log({ address, name });

    return { address, did: name };
  } catch (e) {
    console.error(e);
    throw new Error("Wallet Connection Error");
  }
};

export const walletLogin = (
  walletType: "lens" | "ud" | "siwe"
): Promise<{ address: string; did: string }> => {
  const login = {
    lens: lensLogin,
    ud: udLogin,
    siwe: siweLogin,
  };

  return login[walletType]();
};
