import express from "express";
import {
  userSignIn,
  userSignUp,
  storeSignIn,
  storeSignUp,
  forgetPassword,
  resetPassword,
  userSignUpWithService
} from "./controller";

const router = express.Router();

router.post("/forget/:model", forgetPassword, (req, res) => {
  res
    .status(200)
    .json({ success: true, detail: "Mail for reset Sent Successfully" });
});

router.post("/reset", resetPassword, (req, res) => {
  res
    .status(200)
    .json({ success: true, detail: "Password reset successfully" });
});

router.post("/user/signup", userSignUp, (req, res) => {
  res.status(200).json({
    success: true,
    detail: "Sign Up Successfully",
    token: req.token
  });
});

router.get("/user/signup/:service/:id", userSignUpWithService, (req, res) => {
  res.status(200).json({
    success: true,
    detail: "Sign Up Successfully",
    token: req.token
  });
});

router.post("/user/signin", userSignIn, (req, res) => {
  res.status(200).json({
    detail: "Successfully Logged In",
    auth: true,
    token: req.token
  });
});

router.post("/store/signup", storeSignUp, (req, res) => {
  res.status(200).json({
    success: true,
    detail: "Sign Up Successfully",
    token: req.token
  });
});

router.post("/store/signin", storeSignIn, (req, res) => {
  res.status(200).json({
    detail: "Successfully Logged In",
    auth: true,
    token: req.token
  });
});

export default router;
