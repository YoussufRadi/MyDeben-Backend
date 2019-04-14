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
  viewOrders,
  viewCurrentOrders,
  viewCheckedInUsers,
  serveOrder,
  checkOut,
  cancelOrder,
  generateToken,
  viewService,
  addService,
  modifyService,
  deleteService,
  viewProvider,
  addProvider,
  modifyProvider,
  deleteProvider,
  userReport,
  viewAllProvider,
} from './controller';
import { log } from 'util';

const router = express.Router();

router.get('/generate/code/:ref/:date', generateQRcode, (req, res) =>
  res.status(200).json({
    code: req.code,
  }),
);

router.get('/generate/token/:ref/:date', generateToken, (req, res) =>
  res.status(200).json({
    token: req.token,
  }),
);

router.get('/service', viewService, (req, res) => res.status(200).json({ services: req.services }));

router.post('/service', addService, (req, res) =>
  res.status(200).json({
    detail: `Service id: ${req.service} added successfully`,
    success: true,
  }),
);

router.patch('/service/:id', modifyService, (req, res) => res.status(204).send());

router.delete('/service/:id', deleteService, (req, res) => res.status(204).send());

router.get('/provider', viewProvider, (req, res) =>
  res.status(200).json({ providers: req.providers }),
);

router.get('/provider/all', viewAllProvider, (req, res) => {
  res.status(200).json({ providers: req.providers });
});

router.post('/provider', addProvider, (req, res) =>
  res.status(200).json({
    detail: `Provider id: ${req.provider} added successfully`,
    success: true,
  }),
);

router.patch('/provider/:id', modifyProvider, (req, res) => res.status(204).send());

router.delete('/provider/:id', deleteProvider, (req, res) => res.status(204).send());

router.get('/category', viewCategory, (req, res) =>
  res.status(200).json({ categories: req.categories }),
);

router.post('/category', addCategory, (req, res) =>
  res.status(200).json({
    detail: `Category id: ${req.category} added successfully`,
    success: true,
  }),
);

router.patch('/category/:id', modifyCategory, (req, res) => res.status(204).send());

router.delete('/category/:id', deleteCategory, (req, res) => res.status(204).send());

router.get('/product', viewProduct, (req, res) => res.status(200).json({ products: req.products }));

router.post('/product', addProduct, (req, res) =>
  res.status(200).json({
    detail: `Product id: ${req.product} added successfully`,
    success: true,
  }),
);

router.patch('/product/:id', modifyProduct, (req, res) => res.status(204).send());

router.delete('/product/:id', deleteProduct, (req, res) => res.status(204).send());

router.get('/users', viewCheckedInUsers, (req, res) => res.status(200).json({ users: req.users }));

router.get('/users/:userId', userReport, (req, res) => {
  res.status(200).json({
    user: req.user,
    total: req.total,
    orders: req.orders,
  });
});
router.get('/checkout', checkOut, (req, res) =>
  res.status(200).json({ detail: 'User Checked Out Successfully', success: true }),
);

router.get('/order', viewOrders, (req, res) => res.status(200).json({ orders: req.orders }));

router.get('/order/serve/:id', serveOrder, (req, res) =>
  res.status(200).json({ detail: 'Order Served', success: true }),
);

router.get('/order/cancel/:id', cancelOrder, (req, res) =>
  res.status(200).json({ detail: 'Order Cancelled', success: true }),
);

router.get('/order/current', viewCurrentOrders, (req, res) =>
  res.status(200).json({ orders: req.orders }),
);

export default router;
