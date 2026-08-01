const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, unique: true, index: true },
    favorites:  { type: [String], default: [] },   // Array of "kanji+kana" keys
    mastered:   { type: [String], default: [] },   // Array of "kanji+kana" keys
    quizScore:  {
      correct: { type: Number, default: 0 },
      total:   { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Progress', progressSchema);
