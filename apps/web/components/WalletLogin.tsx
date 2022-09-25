// import { logMissingFieldErrors } from "@apollo/client/core/ObservableQuery";
import React from "react";
import { WalletType } from "../types/logintypes";
import WalletCard from "./WalletCard";

const WalletLogin: React.FC = () => {
  return (
    <div className="">
      <div className="w-full flex gap-5  ">
        <WalletCard walletType="lens" />
        <WalletCard walletType="ud" />
        <WalletCard walletType="siwe" />
      </div>
    </div>
  );
};

export default WalletLogin;
