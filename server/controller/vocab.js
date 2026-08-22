import Vocab from '../models/Vocab.js';

/**
 * GET /api/vocab
 * Query params: level, type, search, page, limit, all
 */
const getVocab = async (req, res, next) => {
    try {
        const {
            level,
            type,
            search,
            page = 1,
            limit = 20,
            all,
        } = req.query;

        const filter = {};

        if (level && level !== 'all') {
            filter.level = level;
        }

        if (type && type !== 'all') {
            filter.type = type;
        }

        if (search && search.trim()) {
            const q = search.trim();

            filter.$or = [
                { kanji: { $regex: q, $options: 'i' } },
                { kana: { $regex: q, $options: 'i' } },
                { romaji: { $regex: q, $options: 'i' } },
                { meaning: { $regex: q, $options: 'i' } },
            ];
        }

        // Return ALL words
        if (all === 'true') {
            const words = await Vocab.find(filter)
                .collation({ locale: 'ja' })
                .sort({
                    kana: 1,
                    kanji: 1,
                });

            return res.json({
                success: true,
                data: words,
            });
        }

        // Pagination
        const pageNumber = Number(page);
        const pageSize = Number(limit);

        const totalWords = await Vocab.countDocuments(filter);

        const words = await Vocab.find(filter)
            .collation({ locale: 'ja' })
            .sort({
                kana: 1,
                kanji: 1,
            })
            .skip((pageNumber - 1) * pageSize)
            .limit(pageSize);

        res.json({
            success: true,
            data: words,
            currentPage: pageNumber,
            totalPages: Math.ceil(totalWords / pageSize),
            totalWords,
        });

    } catch (err) {
        next(err);
    }
};


/**
 * GET /api/vocab/levels
 * Returns word counts per level
 */
const getVocabLevels = async (req, res, next) => {
    try {
        const counts = await Vocab.aggregate([
            {
                $group: {
                    _id: '$level',
                    count: { $sum: 1 },
                },
            },
            {
                $sort: {
                    _id: -1,
                },
            },
        ]);

        res.json({
            success: true,
            data: counts,
        });

    } catch (err) {
        next(err);
    }
};


/**
 * GET /api/vocab/:level
 * Words by exact level
 */
const getVocabByLevel = async (req, res, next) => {
    try {
        const { level } = req.params;

        const validLevels = ['N1', 'N2', 'N3', 'N4', 'N5'];

        if (!validLevels.includes(level.toUpperCase())) {
            return res.status(400).json({
                success: false,
                message: 'Invalid level',
            });
        }

        const words = await Vocab.find({
            level: level.toUpperCase(),
        })
            .collation({ locale: 'ja' })
            .sort({
                kana: 1,
                kanji: 1,
            });

        res.json({
            success: true,
            count: words.length,
            data: words,
        });

    } catch (err) {
        next(err);
    }
};


export {
    getVocab,
    getVocabLevels,
    getVocabByLevel,
};