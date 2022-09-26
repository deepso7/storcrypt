import type { NextPage } from "next";
import UploadButton from "../components/UploadButton";
import TableIcons from "../assets/TableIcons";
import { useFiles } from "../hooks/useFileUpload";
import useDecryptFile from "../hooks/useDecryptFile";

type UserData = {
  id: number;
  address: string;
  cid: string;
  filename: string;
  size: string;
  encryptedKey: string;
};

const table: NextPage = () => {
  const { mutate } = useDecryptFile();
  const { data, isLoading } = useFiles();

  return (
    <div className="flex flex-col justify-center items-center gap-10 max-w-full mx-10 ">
      <UploadButton />
      {isLoading ? (
        <div>loading</div>
      ) : (
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
                  <button
                    type="button"
                    className="bg-white w-4 h-4 ml-3 "
                    onClick={() => mutate(user)}
                  >
                    <span>{TableIcons.download}</span>
                  </button>
                </th>
                <th>{user.filename}</th>
                <th>{user.size}</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default table;
