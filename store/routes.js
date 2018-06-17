import express from "express";
import {
  generateQRcode,
  addCategory,
  viewCategory,
  deleteCategory,
  modifyCategory
} from "./controller";

const router = express.Router();

router.get("/generate/code", generateQRcode, (req, res) => {
  res.status(200).json({
    code: req.code
  });
});

router.get("/category", viewCategory, (req, res) => {
  res.status(200).json(req.categories);
});

router.post("/category", addCategory, (req, res) => {
  res.status(200).json({
    detail: "Category " + req.name + " added successfully",
    success: true
  });
});

router.patch("/category/:id", modifyCategory, (req, res) => {
  res.status(200).json({
    detail: "Category modified successfully",
    success: true
  });
});

router.delete("/category/:id", deleteCategory, (req, res) => {
  res.status(200).json({
    detail: "Category Deleted successfully",
    success: true
  });
});
export default router;
