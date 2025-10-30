// src/routers/psychologists.js
import { Router } from 'express';
import {
  createPsychologistController,
  getAllPsychologistsController,
  getPsychologistByIdController,
} from '../controllers/psychologists.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

// GET /psychologists
router.get('/psychologists', ctrlWrapper(getAllPsychologistsController));

// GET /psychologists/:psychologistId
router.get(
  '/psychologists/:psychologistId',
  ctrlWrapper(getPsychologistByIdController),
);

// POST /psychologists
router.post('/psychologists', ctrlWrapper(createPsychologistController));
export default router;
