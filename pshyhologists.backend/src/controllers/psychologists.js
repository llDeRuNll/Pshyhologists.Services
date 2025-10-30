// src/controllers/psychologists.js
import createHttpError from 'http-errors';
import {
  getAllPsychologists,
  getPsychologistById,
} from '../services/psychologists.js';
import mongoose from 'mongoose';

export const getAllPsychologistsController = async (req, res, next) => {
  const psychologists = await getAllPsychologists();
  res.json({
    status: 200,
    message: 'Successfully found psychologists!',
    data: psychologists,
  });
};

export const getPsychologistByIdController = async (req, res, next) => {
  const { psychologistId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(psychologistId)) {
    throw createHttpError(400, 'Invalid psychologist id');
  }

  const psychologist = await getPsychologistById(psychologistId);

  if (!psychologist) {
    throw createHttpError(404, 'Psychologist not found');
  }

  res.json({
    status: 200,
    message: `Successfully found psychologist with id ${psychologistId}!`,
    data: psychologist,
  });
};
