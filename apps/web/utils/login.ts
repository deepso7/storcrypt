import { getState } from "../store/useStore";
import { WalletType } from "../types/logintypes";
import { walletLogin } from "./walletLogin";

export const login = async (wallet: WalletType) => {
  const { setAddress, setDid, setLogIn } = getState();

  try {
    const { address, did } = await walletLogin(wallet);
    console.log(wallet, address, did)

    
 
      console.log(wallet, address, did)
      setAddress(address);
      setDid(did);
      setLogIn(true);
        
    

    return address;
  } catch (e) {
      setLogIn(false);
      console.error(e);
  }
};
