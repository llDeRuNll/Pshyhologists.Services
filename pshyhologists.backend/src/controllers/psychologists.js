// src/controllers/psychologists.js
import {
  getAllPsychologists,
  getPsychologistById,
} from '../services/psychologists.js';

export const getAllPsychologistsController = async (req, res, next) => {
  try {
    const psychologists = await getAllPsychologists();
    res.json({
      status: 200,
      message: 'Successfully found psychologists!',
      data: psychologists,
    });
  } catch (e) {
    next(e);
  }
};

export const getPsychologistByIdController = async (req, res, next) => {
  try {
    const { psychologistId } = req.params;
    const psychologist = await getPsychologistById(psychologistId);

    if (!psychologist) {
      return res.status(404).json({ message: 'Psychologist not found' });
    }

    res.json({
      status: 200,
      message: `Successfully found psychologist with id ${psychologistId}!`,
      data: psychologist,
    });
  } catch (e) {
    next(e);
  }
};
