import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import useStore from "../store/useStore";
import { truncate } from "../utils/helpers";
import WalletCard from "./WalletCard";

const WalletButton = () => {
  const { address, did, loggenIn, setLogIn } = useStore();

  let [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    if (loggenIn) {
      setLogIn(false);
    } else {
      return;
    }
  };

  return (
    <div>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild>
          <button
            className={`bg-green-500 p-3 rounded-lg font-semibold ${
              loggenIn ? "hover:bg-red-500" : ""
            }`}
            onClick={() => {
              logout();
            }}
          >
            {" "}
            {loggenIn ? (
              <>{did.length > 0 ? did : <>{truncate(address)}</>}</>
            ) : (
              "Connect Wallet"
            )}{" "}
          </button>
        </Dialog.Trigger>

        {!loggenIn && (
          <Dialog.Content className="fixed z-50 p-8 bg-slate-900 w-[95vw] max-w-xl rounded-lg md:w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] backdrop-blur-md shadow-lg ">
            <Dialog.Title className="font-bold mb-5">Log In via:</Dialog.Title>
            <div className="max-w-full flex gap-5">
              <Dialog.Close className="w-full">
                <WalletCard walletType="lens" />
              </Dialog.Close>
              <Dialog.Close className="w-full">
                <WalletCard walletType="ud" />
              </Dialog.Close>
              <Dialog.Close className="w-full">
                <WalletCard walletType="siwe" />
              </Dialog.Close>
            </div>
          </Dialog.Content>
        )}
      </Dialog.Root>
    </div>
  );
};

export default WalletButton;
