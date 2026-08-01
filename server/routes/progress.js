const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');

// Helper: get or create progress doc for sessionId
async function getOrCreate(sessionId) {
  if (!sessionId) throw new Error('sessionId required');
  let progress = await Progress.findOne({ sessionId });
  if (!progress) {
    progress = await Progress.create({ sessionId });
  }
  return progress;
}

/**
 * GET /api/progress
 * Headers: x-session-id
 */
router.get('/', async (req, res, next) => {
  try {
    const sessionId = req.headers['x-session-id'];
    const progress = await getOrCreate(sessionId);
    res.json({ success: true, data: progress });
  } catch (err) {
    next(err);
  }
});

/**
 * PUT /api/progress/favorite
 * Body: { key: "kanji+kana" }
 * Toggles favorite on/off
 */
router.put('/favorite', async (req, res, next) => {
  try {
    const sessionId = req.headers['x-session-id'];
    const { key } = req.body;
    if (!key) return res.status(400).json({ success: false, message: 'key required' });

    const progress = await getOrCreate(sessionId);
    const idx = progress.favorites.indexOf(key);

    let action;
    if (idx === -1) {
      progress.favorites.push(key);
      action = 'added';
    } else {
      progress.favorites.splice(idx, 1);
      action = 'removed';
    }

    await progress.save();
    res.json({ success: true, action, favorites: progress.favorites });
  } catch (err) {
    next(err);
  }
});

/**
 * PUT /api/progress/mastered
 * Body: { key: "kanji+kana" }
 * Toggles mastered on/off
 */
router.put('/mastered', async (req, res, next) => {
  try {
    const sessionId = req.headers['x-session-id'];
    const { key } = req.body;
    if (!key) return res.status(400).json({ success: false, message: 'key required' });

    const progress = await getOrCreate(sessionId);
    const idx = progress.mastered.indexOf(key);

    let action;
    if (idx === -1) {
      progress.mastered.push(key);
      action = 'added';
    } else {
      progress.mastered.splice(idx, 1);
      action = 'removed';
    }

    await progress.save();
    res.json({ success: true, action, mastered: progress.mastered });
  } catch (err) {
    next(err);
  }
});

/**
 * PUT /api/progress/quiz
 * Body: { correct: true|false }
 * Increments quiz score
 */
router.put('/quiz', async (req, res, next) => {
  try {
    const sessionId = req.headers['x-session-id'];
    const { correct } = req.body;

    const progress = await getOrCreate(sessionId);
    progress.quizScore.total += 1;
    if (correct) progress.quizScore.correct += 1;

    await progress.save();
    res.json({ success: true, quizScore: progress.quizScore });
  } catch (err) {
    next(err);
  }
});

/**
 * DELETE /api/progress/reset
 * Resets all progress for session
 */
router.delete('/reset', async (req, res, next) => {
  try {
    const sessionId = req.headers['x-session-id'];
    const progress = await getOrCreate(sessionId);
    progress.favorites = [];
    progress.mastered = [];
    progress.quizScore = { correct: 0, total: 0 };
    await progress.save();
    res.json({ success: true, message: 'Progress reset', data: progress });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
