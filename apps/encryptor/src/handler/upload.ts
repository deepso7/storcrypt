import { Request, Response } from "express";
import { File } from "web3.storage";

import Encryptor from "../lib/Encryptor";
import Streamr from "../lib/Streamr";
import web3Storage from "../lib/Web3Storage";

const encryptor = new Encryptor();
const streamr = new Streamr();

export const uploadHandler = async (req: Request, res: Response) => {
  const file = req.files?.file;

  if (!file) return res.status(400).json({ message: "No file uploaded" });

  if (file instanceof Array)
    return res.status(400).json({ message: "Multiple files not supported" });

  const encryptedFile = encryptor.encrypt(file.data);

  const f = [new File([encryptedFile], file.name)];

  try {
    const cid = await web3Storage.put(f, { name: file.name });

    await streamr.publish({ name: file.name, cid, size: file.size });

    return res.json({ message: "Uploaded", cid });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
