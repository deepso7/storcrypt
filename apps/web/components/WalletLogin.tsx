// import { logMissingFieldErrors } from "@apollo/client/core/ObservableQuery";
import React from "react";
import { WalletType } from "../types/logintypes";
import WalletCard from "./WalletCard";

const WalletLogin: React.FC = () => {
  return (
    <>
      <span className="text-2xl font-bold mb-10">Login</span>
      <div className="h-56 w-56 gap-y-2 grid-rows-2 grid-cols-2 grid gap-2 ">
        <WalletCard walletType="lens" />
        <WalletCard walletType="ud" />
        <WalletCard walletType="siwe" />
        <WalletCard walletType="none" />
      </div>
    </>
  );
};

export default WalletLogin;
