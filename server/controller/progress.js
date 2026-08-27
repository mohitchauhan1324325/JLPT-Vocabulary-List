import Progress from "../models/Progress.js";

// Helper: get or create progress doc for logged-in user
async function getOrCreate(userId) {
    if (!userId) {
        throw new Error("userId required");
    }

    let progress = await Progress.findOne({ userId });

    if (!progress) {
        progress = await Progress.create({ userId });
    }

    return progress;
}


// GET /api/progress
export const getProgress = async (req, res, next) => {
    try {
        const userId = req.user.userId;

        const progress = await getOrCreate(userId);

        res.json({
            success: true,
            data: progress,
        });
    } catch (err) {
        next(err);
    }
};


// PUT /api/progress/favorite
export const toggleFavorite = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const { key } = req.body;

        if (!key) {
            return res.status(400).json({
                success: false,
                message: "key required",
            });
        }

        const progress = await getOrCreate(userId);

        const idx = progress.favorites.indexOf(key);

        let action;

        if (idx === -1) {
            progress.favorites.push(key);
            action = "added";
        } else {
            progress.favorites.splice(idx, 1);
            action = "removed";
        }

        await progress.save();

        res.json({
            success: true,
            action,
            favorites: progress.favorites,
        });
    } catch (err) {
        next(err);
    }
};


// PUT /api/progress/mastered
export const toggleMastered = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const { key } = req.body;

        if (!key) {
            return res.status(400).json({
                success: false,
                message: "key required",
            });
        }

        const progress = await getOrCreate(userId);

        const idx = progress.mastered.indexOf(key);

        let action;

        if (idx === -1) {
            progress.mastered.push(key);
            action = "added";
        } else {
            progress.mastered.splice(idx, 1);
            action = "removed";
        }

        await progress.save();

        res.json({
            success: true,
            action,
            mastered: progress.mastered,
        });
    } catch (err) {
        next(err);
    }
};


// PUT /api/progress/quiz
export const updateQuizScore = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const { correct } = req.body;

        const progress = await getOrCreate(userId);

        progress.quizScore.total += 1;

        if (correct) {
            progress.quizScore.correct += 1;
        }

        await progress.save();

        res.json({
            success: true,
            quizScore: progress.quizScore,
        });
    } catch (err) {
        next(err);
    }
};


// DELETE /api/progress/reset
export const resetProgress = async (req, res, next) => {
    try {
        const userId = req.user.userId;

        const progress = await getOrCreate(userId);

        progress.favorites = [];
        progress.mastered = [];
        progress.quizScore = {
            correct: 0,
            total: 0,
        };

        await progress.save();

        res.json({
            success: true,
            message: "Progress reset",
            data: progress,
        });
    } catch (err) {
        next(err);
    }
};