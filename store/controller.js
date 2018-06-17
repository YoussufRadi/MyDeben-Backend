import { generateQR, getStoreById } from "./model";
import { ensureAuthenticated } from "../auth/controller";

const verfiyStore = (req, res, next) => {
  if (req.model !== "store")
    return res.status(403).json({
      detail: "Permision Denied"
    });
  getStoreById(req.id)
    .then(store => {
      req.store = store;
      next();
    })
    .catch(err => {
      res.status(403).json({ detail: err });
    });
};

const qRcode = (req, res, next) => {
  generateQR(
    "{id: " + req.id + ", name: " + req.store.name + "}",
    (err, code) => {
      if (err)
        return res.status(400).json({
          detail: err
        });
      req.code = code;
      next();
    }
  );
};

export const generateQRcode = [ensureAuthenticated, verfiyStore, qRcode];
