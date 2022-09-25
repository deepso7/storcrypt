import React from "react";
import { WalletType } from "../types/logintypes";
import { login } from "../utils/login";

interface Props {
  walletType: WalletType;
}

const handlelogin = async (wallet: WalletType) => {
  const res = await login(wallet);
};

// const stylediv = (walletType: WalletType) => {
//   switch (walletType) {
//     case (walletType === 'lens') {
//       return ``
//     }
//   }
// }

const WalletCard: React.FC<Props> = ({ walletType }) => {
  return (
    <div
      onClick={() => handlelogin(walletType)}
      className="bg-blue-500 text-xl font-bold rounded-lg w-40 aspect-square flex justify-center items-center"
    >
      <p className="text-white"> {walletType.toUpperCase()}</p>
    </div>
  );
};

export default WalletCard;
