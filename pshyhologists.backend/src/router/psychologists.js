// src/routers/psychologists.js
import { Router } from 'express';
import {
  createPsychologistController,
  deletePsychologistController,
  getAllPsychologistsController,
  getPsychologistByIdController,
  upsertPsychologController,
  patchPsychologController,
} from '../controllers/psychologists.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createPsychologistSchema,
  upsertPsychologistSchema,
} from '../validation/psychologist.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

// GET /psychologists
router.get('/psychologists', ctrlWrapper(getAllPsychologistsController));

// GET /psychologists/:psychologistId
router.get(
  '/psychologists/:psychologistId',
  isValidId,
  ctrlWrapper(getPsychologistByIdController),
);

// POST /psychologists
router.post(
  '/psychologists',
  validateBody(createPsychologistSchema),
  ctrlWrapper(createPsychologistController),
);
export default router;

//DELETE /psychologists/:psychologistId
router.delete(
  '/psychologists/:psychologistId',
  isValidId,
  ctrlWrapper(deletePsychologistController),
);

//PUT psychologists/:psychologistId
router.put(
  '/psychologists/:psychologistId',
  isValidId,
  validateBody(upsertPsychologistSchema),
  ctrlWrapper(upsertPsychologController),
);

//Patch psychologists/:psychologistId
router.patch(
  '/psychologists/:psychologistId',
  isValidId,
  validateBody(upsertPsychologistSchema),
  ctrlWrapper(patchPsychologController),
);
