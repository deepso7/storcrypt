import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import WalletLogin from "../components/WalletLogin";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      {/* <button ></button>
       */}
      Login
      <WalletLogin />
    </div>
  );
};

export default Home;
