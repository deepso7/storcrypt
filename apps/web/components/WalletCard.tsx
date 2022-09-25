import React from "react";
import { WalletType } from "../types/logintypes";
import { login } from "../utils/login";

interface Props {
  walletType: WalletType;
}

const handlelogin = async (wallet: WalletType) => {
  const res = await login(wallet);
};

// const styleButton = (walletType: WalletType) => {
//   switch (walletType) {
//     case (walletType === 'lens') {
//       return ``
//     }
//   }
// }

const WalletCard: React.FC<Props> = ({ walletType }) => {
  return (
    <button
      onClick={() => handlelogin(walletType)}
      className="bg-blue-300 text-xl font-bold rounded-lg w-40 aspect-square flex justify-center items-center"
    >
      {walletType.toUpperCase()}
    </button>
  );
};

export default WalletCard;
