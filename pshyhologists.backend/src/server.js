// src/server.js

import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { getEnvVar } from './utils/getEnvVar.js';
import {
  getAllPsychologists,
  getPsychologistById,
} from './services/psychologists.js';

const PORT = Number(getEnvVar('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());

  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World!',
    });
  });

  app.get('/psychologists', async (req, res) => {
    const psychologists = await getAllPsychologists();

    res.status(200).json({
      data: psychologists,
    });
  });

  app.get('/psychologistId/:psychologistId', async (req, res) => {
    const { psychologistId } = req.params;
    const psychologist = await getPsychologistById(psychologistId);

    if (!psychologist) {
      res.status(404).json({
        message: 'Psychologist not found',
      });
      return;
    }

    res.status(200).json({
      data: psychologist,
    });
  });

  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
