import { WalletType } from "../types/logintypes";
import { walletLogin } from "./walletLogin";

export const login = async (wallet: WalletType) => {
  try {
    const { address, did } = await walletLogin(wallet);
    return address;
  } catch (e) {
    console.error(e);
  }
};
