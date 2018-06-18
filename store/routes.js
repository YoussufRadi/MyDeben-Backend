import express from 'express';
import {
  generateQRcode,
  addCategory,
  viewCategory,
  deleteCategory,
  modifyCategory,
  viewProduct,
  addProduct,
  modifyProduct,
  deleteProduct,
} from './controller';

const router = express.Router();

router.get('/generate/code', generateQRcode, (req, res) =>
  res.status(200).json({
    code: req.code,
  }),
);

router.get('/category', viewCategory, (req, res) =>
  res.status(200).json({ categories: req.categories }),
);

router.post('/category', addCategory, (req, res) =>
  res.status(200).json({
    detail: `Category id: ${req.category} added successfully`,
    success: true,
  }),
);

router.patch('/category/:id', modifyCategory, (req, res) =>
  res.status(200).json({
    detail: 'Category modified successfully',
    success: true,
  }),
);

router.delete('/category/:id', deleteCategory, (req, res) =>
  res.status(200).json({
    detail: 'Category Deleted successfully',
    success: true,
  }),
);

router.get('/product', viewProduct, (req, res) =>
  res.status(200).json({ products: req.products }),
);

router.post('/product', addProduct, (req, res) =>
  res.status(200).json({
    detail: `Product id: ${req.product} added successfully`,
    success: true,
  }),
);

router.patch('/product/:id', modifyProduct, (req, res) =>
  res.status(200).json({
    detail: 'Product modified successfully',
    success: true,
  }),
);

router.delete('/product/:id', deleteProduct, (req, res) =>
  res.status(200).json({
    detail: 'Product Deleted successfully',
    success: true,
  }),
);

export default router;
