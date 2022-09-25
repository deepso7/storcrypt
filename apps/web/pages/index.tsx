import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import Hero from "../components/Hero";
import WalletLogin from "../components/WalletLogin";
import useStore from "../store/useStore";

const Home: NextPage = () => {
  const { setAddress, address, setLogIn, loggenIn } = useStore();

  return (
    <div className="h-full flex flex-col justify-start gap-20 px-20">
      {loggenIn ? <Hero /> : <WalletLogin />}
      <About />

      <Link href="/table">
        <a className="text-white">About Us</a>
      </Link>
    </div>
  );
};

export default Home;
