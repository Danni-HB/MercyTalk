import express from 'express';
import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: { type: String, required: true },
});

export default mongoose.model('Comment', commentSchema); // Cambia a exportación ES
