import type { NextPage } from "next";
import useStore from "../store/useStore";

const Home: NextPage = () => {
  const { setAddress, address, setLogIn, loggenIn } = useStore();

  return (
    <div className="h-full flex justify-center items-center">
      <button
        className="p-3 border border-red-500"
        onClick={() => setAddress("abcd")}
      >
        Set Address State
      </button>
      <button className="p-3 border border-red-500" onClick={() => setLogIn()}>
        Set Login State
      </button>
      <span>{address}</span>
      {loggenIn ? "I am In!" : "I am out :("}
    </div>
  );
};

export default Home;
