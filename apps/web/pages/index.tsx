import type { NextPage } from "next";
import Image from "next/image";
import About from "../components/About";
import Hero from "../components/Hero";
import WalletButton from "../components/WalletButton";
import WalletLogin from "../components/WalletLogin";
import useStore from "../store/useStore";

const Home: NextPage = () => {
  const { setAddress, address, setLogIn, loggenIn } = useStore();

  return (
    <div className="h-full flex flex-col justify-start gap-20 px-20">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
