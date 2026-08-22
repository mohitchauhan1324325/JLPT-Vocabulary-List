import express from 'express';
import { getVocab, getVocabByLevel, getVocabLevels } from '../controller/vocab.js';

const router = express.Router();

router.get('/', getVocab);

router.get('/levels', getVocabLevels);

router.get('/:level', getVocabByLevel);

export default router;