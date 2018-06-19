import express from 'express';
import { userCheckIn, addOrder, viewHistory, profile, discover } from './controller';

const router = express.Router();

router.get('/', userCheckIn, (req, res) => {
  res.status(200).json({
    success: true,
    detail: 'Get Working',
  });
});

router.post('/checkin', userCheckIn, (req, res) => {
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
    oredrs: req.orders,
  });
});

router.get('/profile', profile, (req, res) => {
  res.status(200).json({
    user: req.user,
    total: req.total,
    oredrs: req.orders,
  });
});

router.get('/discover', discover, (req, res) => {
  res.status(200).json({
    gems: req.gems,
  });
});

export default router;
