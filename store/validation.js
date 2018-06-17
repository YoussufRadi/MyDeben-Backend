import Joi from "joi";

export default {
  addCategory: {
    body: {
      name: Joi.string().required()
    },
    query: {
      category: Joi.number().required()
    }
  },
  viewProduct: {
    query: {
      category: Joi.number().required()
    }
  },
  addProduct: {
    body: {
      name: Joi.string().required(),
      price: Joi.number().required(),
      category_id: Joi.number().required()
    }
  }
};