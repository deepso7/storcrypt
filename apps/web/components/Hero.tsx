import UploadButton from "./UploadButton";
import useStore from "../store/useStore";

const Hero = () => {
  const { setAddress, address, setLogIn, loggenIn, did } = useStore();

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 py-12 rounded-xl bg-gradient-to-r from-blue-400 to-emerald-400 ">
      <div className="flex flex-col items-center gap-2">
        <span className="text-5xl  font-extrabold">Welcome to StorCrypt!</span>
        <span className="text-xl font-medium">
          Secure your file before uplaoding to IPFS
        </span>
        <div className="flex flex-col">
          {/* <div className="bg-red-200 rounded-lg px-2 py-1">{address}</div> */}
          <div className="rounded-lg px-2 py-1"> {did}</div>
        </div>
      </div>

      <UploadButton />
    </div>
  );
};

export default Hero;
