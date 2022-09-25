import { Router } from "express";

import keyHandler from "../handler/keyHandler";
import { uploadHandler } from "../handler/upload";

const router = Router();

router.post("/upload", uploadHandler);
router.get("/key", keyHandler);

export default router;
