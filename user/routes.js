import express from "express";
import { userCheckIn, addOrder, viewHistory } from "./controller";

const router = express.Router();

router.post("/checkin", userCheckIn, (req, res) => {
  res.status(200).json({
    success: true,
    detail: "Checked In Successfully"
  });
});

router.post("/order", addOrder, (req, res) => {
  res.status(200).json({
    success: true,
    detail:
      "Order id : " +
      req.order.id +
      " Issued Successfully, total Price : " +
      req.order.total_price
  });
});

router.get("/order", viewHistory, (req, res) => {
  res.status(200).json({
    oredrs: req.orders
  });
});

export default router;
