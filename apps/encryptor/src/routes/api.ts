import { Router } from "express";

import keyHandler from "../handler/keyHandler";
import { donwloadHandler, uploadHandler } from "../handler/upload";

const router = Router();

router.post("/upload", uploadHandler);
router.get("/download", donwloadHandler);
router.get("/key", keyHandler);

export default router;
