// src/middlewares/isValidId.js

import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { psychologistId } = req.params;
  if (!isValidObjectId(psychologistId)) {
    throw createHttpError(400, 'Invalid psychologist ID');
  }
  next();
};
