import express from 'express';
import { getVocab, getVocabByLevel, getVocabLevels } from '../controller/vocab';

const router = express.Router();

router.get('/', getVocab);

router.get('/levels', getVocabLevels);

router.get('/:level', getVocabByLevel);

export default router;