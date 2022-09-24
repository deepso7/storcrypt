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
      className="bg-red-300 px-2 py-1 rounded-lg"
    >
      {walletType}
    </button>
  );
};

export default WalletCard;
