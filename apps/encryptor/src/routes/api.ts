import { Router } from "express";
import { uploadHandler } from "../handler/upload";

const router = Router();

router.post("/upload", uploadHandler);

export default router;
