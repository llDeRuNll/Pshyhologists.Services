import { SORT_ORDER } from '../constans/index.js';

export const parseSortOrder = (sortOrder) => {
  const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
  if (isKnownOrder) return sortOrder;
  return SORT_ORDER.ASC;
};

const parseSortBy = (sortBy) => {
  const keysOfPsychologist = [
    'name',
    'email',
    'specialization',
    'experience',
    'rating',
    'createdAt',
    'updatedAt',
  ];

  if (keysOfPsychologist.includes(sortBy)) {
    return sortBy;
  }

  return '_id';
};

export const parseSortParams = (query) => {
  const { sortBy, sortOrder } = query;
  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy);

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
