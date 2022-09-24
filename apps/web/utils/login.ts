import { WalletType } from "../types/logintypes";
import { walletLogin } from "./walletLogin";

export const login = async (wallet: WalletType) => {
  try {
    const address = await walletLogin(wallet);
  } catch (e) {}
};
