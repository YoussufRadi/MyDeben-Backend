import QRCode from "qrcode";

export const generateQR = async (text, cb) => {
  try {
    cb(await QRCode.toDataURL(text));
  } catch (err) {
    console.error(err);
  }
};
