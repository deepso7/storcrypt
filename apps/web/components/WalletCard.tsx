import React from "react";
import { WalletType } from "../types/logintypes";
import { login } from "../utils/login";

interface Props {
  walletType: WalletType;
}

const handlelogin = async (wallet: WalletType) => {
  const res = await login(wallet);
};

const WalletCard: React.FC<Props> = ({ walletType }) => {
  return (
    <button
      onClick={() => handlelogin(walletType)}
      className="bg-indigo-300 border border-indigo-500 rounded-md"
    >
      {walletType.toUpperCase()}
    </button>
  );
};

export default WalletCard;
