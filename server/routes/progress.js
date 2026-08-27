import express from 'express';

import {
    getProgress,
    resetProgress,
    toggleFavorite,
    toggleMastered,
    updateQuizScore
} from '../controller/progress.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getProgress);

router.put('/favorite', authMiddleware, toggleFavorite);

router.put('/mastered', authMiddleware, toggleMastered);

router.put('/quiz', authMiddleware, updateQuizScore);

router.delete('/reset', authMiddleware, resetProgress);

export default router;