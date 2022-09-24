import { Request, Response } from "express";

// import Encryptor from "../lib/Encryptor";

// const encryptor = new Encryptor();

export const uploadHandler = async (req: Request, res: Response) => {
  const file = req.files?.file;

  if (!file) return res.status(400).json({ message: "No file uploaded" });

  // const data = file.data

  // const encryptedFile = encryptor.encrypt(file.data);

  console.log({ file });

  return res.json({ message: "Uploaded" });
};
