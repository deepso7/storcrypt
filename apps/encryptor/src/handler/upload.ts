import { Request, Response } from "express";
import { File } from "web3.storage";
import { z } from "zod";

import Encryptor from "../lib/Encryptor";
import Streamr from "../lib/Streamr";
import web3Storage from "../lib/Web3Storage";
import addressToKey from "../utils/addressToKey";

const encryptor = new Encryptor();
const streamr = new Streamr();

const validator = z.object({
  address: z.string(),
  secret: z.string(),
});

export const uploadHandler = async (req: Request, res: Response) => {
  const file = req.files?.file;

  if (!file) return res.status(400).json({ message: "No file uploaded" });

  if (file instanceof Array)
    return res.status(400).json({ message: "Multiple files not supported" });

  const data = validator.safeParse(req.body);

  if (!data.success)
    return res
      .status(400)
      .json({ message: "Invalid data", errors: data.error.issues });

  const body = data.data;

  const key = addressToKey.get(body.address);

  if (!key) return res.status(400).json({ message: "pls request a key first" });

  const encryptedFile = encryptor.encrypt(file.data, key);

  const f = [new File([encryptedFile], file.name)];

  try {
    const cid = await web3Storage.put(f, { name: file.name });

    await streamr.publish({
      name: file.name,
      cid,
      size: file.size,
      key: body.secret,
      address: body.address,
    });

    return res.json({ message: "Uploaded", cid });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
