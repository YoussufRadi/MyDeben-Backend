import express from "express";
import { getUsers, userCheckIn } from "./controller";

const router = express.Router();

router.get("/", getUsers, (req, res) => {
  res.status(200).json({
    users: req.users
  });
});

router.post("/checkin", userCheckIn, (req, res) => {
  res.status(200).json({
    success: true,
    detail: "Checked In Successfully"
  });
});

export default router;
