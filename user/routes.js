import express from 'express';
import {
  userCheckIn,
  addOrder,
  viewHistory,
  profile,
  discover,
  viewCategory,
  viewProduct,
  userCheckInToken,
  viewService,
  search,
} from './controller';

const router = express.Router();

// router.post('/checkin/', userCheckIn, (req, res) => {
//   res.status(200).json({
//     success: true,
//     detail: 'Checked In Successfully',
//   });
// });

router.post('/checkin/', userCheckInToken, (req, res) => {
  res.status(200).json({
    success: true,
    detail: 'Checked In Successfully',
  });
});

router.post('/order', addOrder, (req, res) => {
  res.status(200).json({
    success: true,
    detail: `Orders: ${req.orders} Issued Successfully`,
  });
});

router.get('/order', viewHistory, (req, res) => {
  res.status(200).json({
    orders: req.orders,
  });
});

router.get('/profile', profile, (req, res) => {
  res.status(200).json({
    user: req.user,
    total: req.total,
    orders: req.orders,
  });
});

router.get('/discover', discover, (req, res) => {
  res.status(200).json({
    gems: req.gems,
  });
});

router.get('/search', search, (req, res) => res.status(200).json({ results: req.results }));

router.get('/service', viewService, (req, res) => res.status(200).json({ services: req.services }));

router.get('/category', viewCategory, (req, res) =>
  res.status(200).json({ categories: req.categories }),
);

router.get('/product', viewProduct, (req, res) => res.status(200).json({ products: req.products }));

export default router;
