import React from "react";
import { WalletType } from "../types/logintypes";

interface Props {
  walletType: WalletType;
}

const handlelogin = async (wallet: WalletType) => {
  console.log(wallet);
};

const WalletCard: React.FC<Props> = ({ walletType }) => {
  return (
    <button
      onClick={() => handlelogin(walletType)}
      className="bg-indigo-300 border border-indigo-500 rounded-md"
    >
      {walletType}
    </button>
  );
};

export default WalletCard;
