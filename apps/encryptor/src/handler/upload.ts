import { Request, Response } from "express";

import Encryptor from "../lib/Encryptor";
import Streamr from "../lib/Streamr";

const encryptor = new Encryptor();
const streamr = new Streamr();

export const uploadHandler = async (req: Request, res: Response) => {
  const file = req.files?.file;

  if (!file) return res.status(400).json({ message: "No file uploaded" });

  if (file instanceof Array)
    return res.status(400).json({ message: "Multiple files not supported" });

  const encryptedFile = encryptor.encrypt(file.data);

  console.log({ encryptedFile });

  streamr.publish({ encryptedFile: file.name });

  return res.json({ message: "Uploaded" });
};
