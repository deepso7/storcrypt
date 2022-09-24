import type { NextPage } from "next";
import Image from "next/image";
import useRootStore from "../store/useRootStore";



const Home: NextPage = () => {

  const { setAddress, address, setLogIn, loggenIn } = useRootStore()

  return (
    <div className="h-full flex justify-center items-center">
      <button className="p-3 border border-red-500" onClick={() => setAddress('abcd')}>Set Address State</button>
      <button className="p-3 border border-red-500" onClick={() => setLogIn()}>Set Login State</button>
      <span>{address}</span>
      {
        loggenIn ? "I am In!" : "I am out :("
      }
      <Image src='/crypt4.png' className="select-none" height={600} width={600} />
    </div>
  );
};

export default Home;
