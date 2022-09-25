import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { UserData } from "./useFileUpload";

const useDecryptFile = () => {
  return useMutation(
    async (user: UserData) => {
      if (!window.ethereum) throw new Error("wallet not dounf");
      const res = await window.ethereum.request?.({
        method: "eth_decrypt",
        params: [user.encryptedKey, user.address],
      });

      window.open(
        `http://localhost:4000/api/download?cid=${user.cid}&key=${res}&filename=${user.filename}`,
        "_blank"
      );
    },
    {
      onError: (error) => {
        toast.error("Error decrypting file");
        console.error(error);
      },
    }
  );
};

export default useDecryptFile;
