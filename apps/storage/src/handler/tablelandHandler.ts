import { Request, Response } from "express";

import tableland from "../lib/Tableland";

export const createTable = async (req: Request, res: Response) => {
  const { prefix } = req.body;

  if (!prefix) return res.status(400).json({ message: "prefix is required" });

  try {
    const data = await tableland.createTable(prefix);

    return res.json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

export const readHandler = async (req: Request, res: Response) => {
  const { address } = req.query;

  if (typeof address !== "string")
    return res.status(400).json({ message: "address is required" });

  try {
    const entries = await tableland.read(address);
    return res.json({ entries });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};
