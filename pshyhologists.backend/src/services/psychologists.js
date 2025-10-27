// src/services/psychologists.js

import { PsychologistsCollection } from '../db/models/psychologists.js';

export const getAllPsychologists = async () => {
  const psychologists = await PsychologistsCollection.find();
  return psychologists;
};

export const getPsychologistById = async (psychologistId) => {
  const psychologist = await PsychologistsCollection.findById(psychologistId);
  return psychologist;
};
