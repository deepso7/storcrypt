import { useMutation } from "@tanstack/react-query";

const useFileUploadMutation = () => {
  return useMutation(
    async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });
      return response.json();
    },
    {
      onError: (error) => {
        alert("Error uploading file");
        console.error(error);
      },
    }
  );
};

export default useFileUploadMutation;
