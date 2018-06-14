import { generateQR } from "./model";

export const generateQRcode = (req, res, next) => {
  generateQR("https://www.npmjs.com/package/qrcode-generator", code => {
    console.log(code);

    req.code = code;
    next();
  });
};
