import cors from "cors";
import express from "express";
import helmet from "helmet";

import { createTable, readHandler } from "./handler/tablelandHandler";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => res.json({ message: "Hello World!" }));

app.post("/create-table", createTable);
app.get("/read", readHandler);

export default app;
