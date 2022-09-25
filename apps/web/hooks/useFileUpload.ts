import { useMutation } from "@tanstack/react-query";
import { bufferToHex } from "ethereumjs-util";
import { encrypt } from "@metamask/eth-sig-util";

import { getState } from "../store/useStore";
import toast from "react-hot-toast";

const useFileUploadMutation = () => {
  return useMutation(
    async (file: File) => {
      if (!window.ethereum) throw new Error("No ethereum provider found");

      const address = getState().address;

      const res = await fetch(
        `http://localhost:4000/api/key?address=${address}`
      );
      const data = await res.json();

      console.log({ data });

      const encryptionPublicKey = await window.ethereum.request?.({
        method: "eth_getEncryptionPublicKey",
        params: [address],
      });

      console.log({ encryptionPublicKey, bufferToHex });

      const encryptedMessage = bufferToHex(
        Buffer.from(
          JSON.stringify(
            encrypt({
              publicKey: encryptionPublicKey,
              data: data.key,
              version: "x25519-xsalsa20-poly1305",
            })
          ),
          "utf8"
        )
      );

      const formData = new FormData();

      formData.append("file", file);
      formData.append("secret", encryptedMessage);
      formData.append("address", address);

      const response = await fetch("http://localhost:4000/api/upload", {
        method: "POST",
        body: formData,
      });
      return response.json();
    },
    {
      onError: (error) => {
        toast.error("Error uploading file");
        console.error(error);
      },
    }
  );
};

export default useFileUploadMutation;
