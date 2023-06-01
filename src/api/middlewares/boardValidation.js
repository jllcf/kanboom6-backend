const { generalError } = require("../../utils/responses");
const boardSchemas = require("../schemas/boardSchemas");

const boardValidation = (schema) => {
  return async (req, res, next) => {
    try {
      await boardSchemas[schema].validate(req.body, { abortEarly: false });
      next();
    } catch (error) {
      return generalError(res, error.errors);
    }
  };
};

module.exports = { boardValidation };
