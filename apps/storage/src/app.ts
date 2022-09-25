import cors from "cors";
import express from "express";
import helmet from "helmet";

import { createTable, readHandler } from "./handler/tablelandHandler";
import Streamr from "./lib/Streamr";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => res.json({ message: "Hello World!" }));

app.post("/create-table", createTable);
app.get("/read", readHandler);

const streamr = new Streamr();
streamr.subscribe("0xd319649206db744a01b90a6bac53cdeefb787fd4/storcrypt");

export default app;
