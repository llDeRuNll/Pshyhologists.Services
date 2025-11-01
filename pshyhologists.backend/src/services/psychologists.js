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

export const createPsychologist = async (payload) => {
  const psychologist = await PsychologistsCollection.create(payload);
  return psychologist;
};

export const deletePsychologist = async (psychologistId) => {
  const psychologist = await PsychologistsCollection.findOneAndDelete({
    _id: psychologistId,
  });
  return psychologist;
};

export const upsertPsycholog = async (
  psychologistId,
  payload,
  options = {},
) => {
  const rawResult = await PsychologistsCollection.findByIdAndUpdate(
    psychologistId,
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    psychologist: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
