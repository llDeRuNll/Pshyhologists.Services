// src/middlewares/validateBody.js
import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    if (error.isJoi) {
      const errorDetails = error.details
        .map((detail) => detail.message)
        .join(', ');
      return next(createHttpError(400, `Validation Error: ${errorDetails}`));
    }
    next(error);
  }
};
