import { logMissingFieldErrors } from "@apollo/client/core/ObservableQuery";
import React from "react";
import { WalletType } from "../types/logintypes";
import WalletCard from "./WalletCard";

const WalletLogin: React.FC = () => {
  return (
    <div className="gap-x-2 h-56 w-56 gap-y-2 grid-rows-3 grid-cols-2 grid">
      <WalletCard walletType="lens" />
      <WalletCard walletType="ud" />
      <WalletCard walletType="siwe" />
    </div>
  );
};

export default WalletLogin;
