import express from "express";
import { getUsers } from "./controller";

const router = express.Router();

router.get("/", getUsers, (req, res) => {
  res.status(200).json({
    users: req.users
  });
});

export default router;
