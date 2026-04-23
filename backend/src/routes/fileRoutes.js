import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import { getFiles, uploadFile } from "../controllers/fileController.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile);
router.get("/", getFiles);

export default router;
