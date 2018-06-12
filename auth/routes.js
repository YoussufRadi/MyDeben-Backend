import express from "express";
import { signIn, signUp } from "./controller";

const router = express.Router();

router.post("/signup", signUp, (req, res) => {
  res.status(200).json({ success: false, detail: "Sign Up Successfully" });
});

router.post("/signin", signIn, (req, res) => {
  res.status(200).json({
    detail: "Successfully Logged In",
    auth: true,
    token: req.token
  });
});

export default router;
