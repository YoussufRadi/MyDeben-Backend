import knex from "../knex";
import QRCode from "qrcode";

export const generateQR = async (text, cb) => {
  try {
    cb(null, await QRCode.toDataURL(text));
  } catch (err) {
    cb(err);
  }
};

export const getStoreById = id =>
  knex("store")
    .where("id", id)
    .then(stores => stores[0]);
