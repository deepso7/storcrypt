import { ChangeEventHandler, useRef } from "react";
import useFileUploadMutation from "../hooks/useFileUpload";

const UploadButton = () => {
  const { mutate, isLoading } = useFileUploadMutation();
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files) {
      mutate(e.target.files[0]);
    }
  };

  return (
    <div
      className="p-5 border-4 border-dashed rounded-2xl font-bold border-gray-600 bg-gray-300 cursor-pointer"
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
        <span className="text-green-500">Uploading...</span>
      )}
    </div>
  );
};

export default UploadButton;
