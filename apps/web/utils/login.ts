import { getState } from "../store/useStore";
import { WalletType } from "../types/logintypes";
import { walletLogin } from "./walletLogin";
import toast from 'react-hot-toast'

export const login = async (wallet: WalletType) => {
  const { setAddress, setDid, setLogIn } = getState();

  try {
    const { address, did } = await walletLogin(wallet);
    console.log(wallet, address, did)



    console.log(wallet, address, did)
    setAddress(address);
    setDid(did);
    setLogIn(true);
    toast.success('Logged In!')


    return address;
  } catch (e) {
    setLogIn(false);
    toast.error("Wallet Connection Error")
    console.error(e);
  }
};
