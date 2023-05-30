const { generalError } = require("../../utils/responses");
const userSchemas = require("../schemas/userSchemas");

const userValidation = (schema) => {
  return async (req, res, next) => {
    try {
      await userSchemas[schema].validate(req.body, { abortEarly: false });
      next();
    } catch (error) {
      return generalError(res, error.errors);
    }
  };
};

module.exports = { userValidation };
