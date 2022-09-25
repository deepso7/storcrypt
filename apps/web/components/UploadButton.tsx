import { useRouter } from "next/router";
import { ChangeEventHandler, useRef } from "react";
import toast from "react-hot-toast";
import useFileUploadMutation from "../hooks/useFileUpload";
import { getState } from "../store/useStore";

const UploadButton = () => {
  const { mutate, isLoading } = useFileUploadMutation();
  const fileRef = useRef<HTMLInputElement>(null);

  const { loggenIn } = getState()

  const handleFileUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!loggenIn) {
      toast.error("Wallet not connected!")
    }
    if (e.target.files) {
      mutate(e.target.files[0]);
    }
  };

  const route = useRouter()

  return (
    <div
      className={`p-5 border-4 border-dashed rounded-2xl font-bold border-gray-600 bg-gray-300 cursor-pointer ${
        route.pathname === '/files' ? 'w-fit bg-gray-800': ''
      }`}
      onClick={() => fileRef.current?.click()}
    >
      {!isLoading ? (
        <>
          <input
            ref={fileRef}
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />
          + &nbsp; Upload a file
        </>
      ) : (
        <span className="text-slate-500">Uploading...</span>
      )}
    </div>
  );
};

export default UploadButton;
