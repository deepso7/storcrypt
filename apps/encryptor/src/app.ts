import cors from "cors";
import express from "express";
import helmet from "helmet";
import fileUpload from "express-fileupload";
import apiRouter from "./routes/api";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.get("/", (_req, res) => res.json({ message: "Hello World!" }));

app.use("/api", apiRouter);

export default app;
