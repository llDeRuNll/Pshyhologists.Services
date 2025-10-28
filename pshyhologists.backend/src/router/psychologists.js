// src/routers/psychologists.js
import { Router } from 'express';
import {
  getAllPsychologistsController,
  getPsychologistByIdController,
} from '../controllers/psychologists.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

// GET /api/psychologists
router.get('/psychologists', ctrlWrapper(getAllPsychologistsController));

// GET /api/psychologists/:psychologistId
router.get(
  '/psychologists/:psychologistId',
  ctrlWrapper(getPsychologistByIdController),
);

export default router;
