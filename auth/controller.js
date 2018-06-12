import { create, getByEmail } from "./model";
import config from "../config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = (req, res, next) => {
  req.body.user.password = bcrypt.hashSync(req.body.user.password, 10);
  create(req.body.user)
    .then(email => {
      res.status(200).json({
        success: true,
        msg: "Success Registered"
      });
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        err
      });
    });
};

export const signIn = (req, res, next) => {
  getByEmail(req.body.email)
    .then(user => {
      const passIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (passIsValid) {
        user.password = "";
        const token = jwt.sign(user, config.jwtSecret, {
          expiresIn: 86400 // expires in 24 hours
        });
        console.log(token);
        res.status(200).json({
          msg: "Successfully Logged In",
          auth: true,
          token
        });
      } else {
        res.status(401).json({
          msg: "unauthorized",
          auth: false
        });
      }
    })
    .catch(err => {
      res.status(400).json({
        err,
        auth: false
      });
    });
};
