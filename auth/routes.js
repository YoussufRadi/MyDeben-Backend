import express from 'express';
import { userSignIn, userSignUp, storeSignIn, storeSignUp, forgetPassword } from './controller';

const router = express.Router();

router.post('/reset/:model', forgetPassword, (req, res) => {
  res.status(200).json({ success: true, detail: 'Sign Up Successfully' });
});

router.post('/user/signup', userSignUp, (req, res) => {
  res.status(200).json({ success: true, detail: 'Sign Up Successfully' });
});

router.post('/user/signin', userSignIn, (req, res) => {
  res.status(200).json({
    detail: 'Successfully Logged In',
    auth: true,
    token: req.token,
  });
});

router.post('/store/signup', storeSignUp, (req, res) => {
  res.status(200).json({ success: true, detail: 'Sign Up Successfully' });
});

router.post('/store/signin', storeSignIn, (req, res) => {
  res.status(200).json({
    detail: 'Successfully Logged In',
    auth: true,
    token: req.token,
  });
});

export default router;
