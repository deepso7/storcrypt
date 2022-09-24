import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import WalletLogin from "../components/WalletLogin";

const Home: NextPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center py-2">
      
      <WalletLogin />
    </div>
  );
};

export default Home;
