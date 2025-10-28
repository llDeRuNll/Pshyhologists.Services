// src/routers/psychologists.js
import { Router } from 'express';
import {
  getAllPsychologistsController,
  getPsychologistByIdController,
} from '../controllers/psychologists.js';

const router = Router();

// GET /api/psychologists
router.get('/psychologists', getAllPsychologistsController);

// GET /api/psychologists/:psychologistId
router.get('/psychologists/:psychologistId', getPsychologistByIdController);

export default router;
