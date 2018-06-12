import { create, getByEmail } from "./model";
import config from "../config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = (req, res, next) => {
  req.body.user.password = bcrypt.hashSync(req.body.user.password, 10);
  create(req.body.user)
    .then(_ => {
      next();
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        detail: "Sign Up failed",
        //TODO remove later
        err
      });
    });
};

export const signIn = (req, res, next) => {
  getByEmail(req.body.email)
    .then(user => {
      const passIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passIsValid)
        res.status(400).json({
          detail: "Invalid Username/Password provided",
          token: null,
          auth: false
        });
      user.password = "";
      req.token = jwt.sign({ id: user._id }, config.jwtSecret, {
        expiresIn: 86400 // expires in 24 hours
      });
      next();
    })
    .catch(err => {
      res.status(400).json({
        detail: "Invalid Username/Password provided",
        auth: false,
        token: null,
        //TODO remove later
        err
      });
    });
};
