import { Request, Response } from "express";

import tableland from "../lib/Tableland";

export const createTable = async (req: Request, res: Response) => {
  const { prefix } = req.body;

  if (!prefix) return res.status(400).json({ message: "prefix is required" });

  try {
    const data = await tableland.create(`id integer primary key, name text`, {
      prefix,
    });

    return res.json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

export const insertHandler = async (req: Request, res: Response) => {
  const { table, data } = req.body;

  if (!table) return res.status(400).json({ message: "table is required" });
  if (!data) return res.status(400).json({ message: "data is required" });

  try {
    const data = await tableland.write(
      `INSERT INTO ${table} (id, name) VALUES (8, 'Bobby Tables');`
    );

    return res.json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
