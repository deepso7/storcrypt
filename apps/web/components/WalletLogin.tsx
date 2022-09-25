// import { logMissingFieldErrors } from "@apollo/client/core/ObservableQuery";
import React from "react";
import { WalletType } from "../types/logintypes";
import WalletCard from "./WalletCard";

const WalletLogin: React.FC = () => {
  return (
    <>
      <span className="text-2xl font-bold ">Login</span>
      <div className="h-56 w-56 gap-y-2 grid-rows-2 grid-cols-2 grid gap-2 ">
        <WalletCard walletType="siwe" />
        <WalletCard walletType="lens" />
        <WalletCard walletType="ud" />

        <button className="bg-indigo-300 border border-indigo-500 rounded-md text-white">
          Don't have Wallet
        </button>
      </div>
    </>
  );
};

export default WalletLogin;
