import useStore from "../store/useStore";
import type { NextPage } from "next";
import UploadButton from "../components/UploadButton";
import { useFiles } from "../hooks/useFileUpload";

type UserData = {
  id: number;
  address: string;
  cid: string;
  filename: string;
  size: string;
  encryptedKey: string;
};

const table: NextPage = () => {
  const handledecrypt = async (user: UserData) => {
    try {
      if (!window.ethereum) throw new Error("wallet not dounf");
      const res = await window.ethereum.request?.({
        method: "eth_decrypt",
        params: [user.encryptedKey, user.address],
      });

      console.log({ res });
    } catch (e) {
      console.error(e);
    }
  };

  const { data } = useFiles();

  return (
    <div className="flex flex-col justify-center items-center gap-10 max-w-full mx-10 ">
      <UploadButton />
      <table className="table w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>Address</th>
            <th>CID</th>
            <th>Filename</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <th>{user.address}</th>
              <th>
                {user.cid}{" "}
                <button type="button" onClick={() => handledecrypt(user)}>
                  decrypt
                </button>
              </th>
              <th>{user.filename}</th>
              <th>{user.size}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default table;
