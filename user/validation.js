import Joi from "joi";

export default {
  checkIn: {
    body: {
      name: Joi.string().required(),
      id: Joi.number().required()
    }
  }
};
