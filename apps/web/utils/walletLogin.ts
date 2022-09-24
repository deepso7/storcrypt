import { ethers } from "ethers";
import { SiweMessage } from "siwe";

const lensLogin = async () => {
  return "";
};

const udLogin = async () => {
  return "";
};

const siweLogin = async () => {
  //   const domain = window.location.host;
  //   const origin = window.location.origin;
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();

  //   provider
  //     .send("eth_requestAccounts", [])

  //     .catch(() => console.log("user rejected request"));

  //   const message = new SiweMessage({
  //     domain,
  //     address,
  //     statement,
  //     uri: origin,
  //     version: "1",
  //     chainId: "1",
  //   });

  //   async function signInWithEthereum() {
  //     const message = createSiweMessage(
  //       await signer.getAddress(),
  //       "Sign in with Ethereum to the app."
  //     );
  //     console.log(await signer.signMessage(message));
  //   }

  //   connectWalletBtn.onclick = connectWallet;
  //   siweBtn.onclick = signInWithEthereum;
  return "";
};
export const walletLogin = (walletType: string) => {
  const login: Record<string, () => Promise<string>> = {
    lens: lensLogin,
    ud: udLogin,
    siwe: siweLogin,
  };

  return login[walletType]();
};
