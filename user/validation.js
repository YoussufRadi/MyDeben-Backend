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
      store_id: Joi.number().required(),
      order: Joi.array().items(
        Joi.object({
          quantity: Joi.number().required(),
          product_id: Joi.number().required()
        })
      )
    }
  }
};
