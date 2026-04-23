import express from "express";
import upload from "../middlewares/uploadMiddleware";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile);
router.get("/", getFiles);

export default router;
