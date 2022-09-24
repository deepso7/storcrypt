import type { NextPage } from "next";
import Image from "next/image";
import About from "../components/About";
import Hero from "../components/Hero";
import useRootStore from "../store/useRootStore";



const Home: NextPage = () => {

  const { setAddress, address, setLogIn, loggenIn } = useRootStore()

  return (
    <div className="h-full flex flex-col justify-start gap-20 px-20">
      <Hero />
      <About />
     
    </div>
  );
};

export default Home;
