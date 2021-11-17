const { Joi } = require("express-validation");

const tuitValidation = {
  body: Joi.object({
    text: Joi.string().max(200).required(),
  }),
};

module.exports = {
  tuitValidation,
};
