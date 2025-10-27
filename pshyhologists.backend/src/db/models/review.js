// src/db/models/review.js

import { Schema } from 'mongoose';

export const ReviewSchema = new Schema(
  {
    reviewer: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, trim: true, maxlength: 2000 },
  },
  {
    _id: false,
    timestamps: { createdAt: 'created_at', updatedAt: false },
  },
);
