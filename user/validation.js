import Joi from "joi";

export default {
  checkIn: {
    body: {
      store_name: Joi.string().required(),
      store_id: Joi.number().required()
    }
  },
  makeOrder: {
    body: {
      quantity: Joi.number().required(),
      store_id: Joi.number().required(),
      product_id: Joi.number().required()
    }
  }
};
