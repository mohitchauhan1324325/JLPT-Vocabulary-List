import mongoose from "mongoose";

const vocabSchema = new mongoose.Schema(
  {
    kanji: { type: String, required: true },
    kana: { type: String, required: true },
    romaji: { type: String, required: true },
    meaning: { type: String, required: true },
    type: {
      type: String,
      enum: [
        'noun',
        'verb',
        'adjective',
        'adverb',
        'counter',
        'expression',
        'pronoun',
        'prefix',
        'suffix',
        'conjunction',
        'interjection',
        'particle',
        'number',
        'question'
      ],
      required: true,
    },
    level: {
      type: String,
      enum: ['N1', 'N2', 'N3', 'N4', 'N5'],
      required: true,
    },
    example: { type: String, default: '' },
    exampleRomaji: { type: String, default: '' },
    exampleMeaning: { type: String, default: '' },
  },
  { timestamps: true }
);

// Index for fast filtering
vocabSchema.index({ level: 1 });
vocabSchema.index({ type: 1 });
vocabSchema.index({ kana: 1 });
vocabSchema.index({ kanji: 'text', kana: 'text', romaji: 'text', meaning: 'text' });

export default mongoose.model('Vocab', vocabSchema);
