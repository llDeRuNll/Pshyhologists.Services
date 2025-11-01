// src/services/psychologists.js

import { PsychologistsCollection } from '../db/models/psychologists.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllPsychologists = async (page, perPage) => {
  const skip = (page - 1) * perPage;
  const [psychologists, total] = await Promise.all([
    PsychologistsCollection.find().skip(skip).limit(perPage),
    PsychologistsCollection.countDocuments(),
  ]);

  const paginationData = calculatePaginationData(total, perPage, page);

  return { data: psychologists, ...paginationData };
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
