const httpStatus = require("http-status");
const Joi = require("joi");

const schemas = {
  "/institute/student/create": Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    phone: Joi.string().pattern(new RegExp("")).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  }),
  "/other-api": Joi.object({
    // Define schema for other API
    // ...
  }),
};

const validateRequest = (req, res, next) => {
  if (["POST", "PUT", "PATCH"].includes(req.method) && req.body) {
    const schema = schemas[req.url];

    if (schema) {
      const validationResult = schema.validate(req.body, { abortEarly: false });
      if (validationResult.error) {
        const errors = validationResult.error.details.map((detail) => ({
          [detail.context.key]: detail.message,
        }));
        return res.status(httpStatus.BAD_REQUEST).json({ errors: errors });
      }
    }
  }
  next();
};

module.exports = validateRequest;
