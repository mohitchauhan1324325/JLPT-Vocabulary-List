import express from 'express';
import { getProgress, resetProgress, toggleFavorite, toggleMastered, updateQuizScore } from '../controller/progress.js';

const router = express.Router();

router.get('/', getProgress);

router.put('/favorite', toggleFavorite);

router.put('/mastered', toggleMastered);

router.put('/quiz', updateQuizScore);

router.delete('/reset', resetProgress);

export default router;