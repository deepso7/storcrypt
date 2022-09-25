import { getState } from "../store/useStore";
import { WalletType } from "../types/logintypes";
import { walletLogin } from "./walletLogin";

export const login = async (wallet: WalletType) => {
  const { setAddress, setDid, setLogIn } = getState();

  try {
    const { address, did } = await walletLogin(wallet);

    setAddress(address);
    setLogIn();
    setDid(did);
    return address;
  } catch (e) {
    console.error(e);
  }
};
