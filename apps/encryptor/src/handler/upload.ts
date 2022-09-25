import { Request, Response } from "express";
import { File } from "web3.storage";
import { z } from "zod";
import stream from "stream";

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

    const response = {
      address: body.address,
      cid,
      encryptedKey: body.secret,
      filename: file.name,
      size: file.size,
    };

    await streamr.publish({
      type: "file-uploaded",
      ...response,
    });

    return res.json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const donwloadHandler = async (req: Request, res: Response) => {
  const { cid, key, filename } = req.query;

  if (typeof cid !== "string" || typeof key !== "string")
    return res.status(400).json({ message: "Missing cid or key" });

  try {
    const file = await web3Storage.get(cid);

    if (!file)
      return res.status(404).json({ message: "File not found, invalid cid" });

    const f = await file.files();

    const buf = await f[0].arrayBuffer();

    const decryptedFile = encryptor.decrypt(Buffer.from(buf), key);

    console.log({ decryptedFile });

    const readStream = new stream.PassThrough();

    readStream.end(decryptedFile);

    res.set("Content-disposition", "attachment; filename=" + filename);
    res.set("Content-Type", "image/png");

    readStream.pipe(res);
    return;
  } catch (err) {
    console.error(err);

    return res.status(500).json({ message: err.message });
  }
};
