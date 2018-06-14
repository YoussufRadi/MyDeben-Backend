import express from "express";
import { generateQRcode } from "./controller";

const router = express.Router();

router.get("/", generateQRcode, (req, res) => {
  res.status(200).json({
    code: req.code
  });
});

export default router;
