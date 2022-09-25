import UploadButton from "./UploadButton";
import useStore from "../store/useStore";
import WalletLogin from "./WalletLogin";

const Hero = () => {
    const { setAddress, address, setLogIn, loggenIn, did } = useStore();

    return (
        <div className="w-full grid grid-cols-2 place-items-center gap-8 py-12 h-56 rounded-xl text-black bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 ">
            <div className="flex flex-col items-center gap-2">
                <span className="text-5xl  font-extrabold">Welcome to StorCrypt!</span>
                <span className="text-xl font-medium">
                    Secure your file before uplaoding to IPFS
                </span>
            </div>            
                
            <div className="flex gap-5">

                {
                    loggenIn ? (<UploadButton/>) : (<span className="text-xl font-bold p-3 bg-purple-300 rounded-lg ">
                        Log in to encrypt your file!
                    </span>)
                }

            </div>

        </div>
    );
};

export default Hero;
