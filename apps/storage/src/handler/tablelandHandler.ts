import { resultsToObjects } from "@tableland/sdk";
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
  const { table } = req.body;

  if (!table) return res.status(400).json({ message: "table is required" });

  try {
    const data = await tableland.write(
      `INSERT INTO ${table} (id, name) VALUES (0, 'Ramit');`
    );

    return res.json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

export const readHandler = async (req: Request, res: Response) => {
  const { name } = req.query;

  if (!name) return res.status(400).json({ message: "name is required" });

  try {
    const results = await tableland.read(`SELECT * FROM ${name} WHERE id = 0;`);
    const entries = resultsToObjects(results);

    return res.json({ entries });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};
