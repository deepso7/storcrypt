import { Request, Response } from "express";
import { nanoid } from "nanoid";
import addressToKey from "../utils/addressToKey";

const keyHandler = async (req: Request, res: Response) => {
  const key = nanoid();
  const { address } = req.query;

  if (typeof address !== "string")
    return res.status(400).json({ message: "Invalid address" });

  addressToKey.set(address, key);

  return res.json({ key });
};

export default keyHandler;
