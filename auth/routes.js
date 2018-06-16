import express from "express";
import { userSignIn, userSignUp } from "./controller";

const router = express.Router();

router.post("/signup", userSignUp, (req, res) => {
  res.status(200).json({ success: true, detail: "Sign Up Successfully" });
});

router.post("/signin", userSignIn, (req, res) => {
  res.status(200).json({
    detail: "Successfully Logged In",
    auth: true,
    token: req.token
  });
});

export default router;
