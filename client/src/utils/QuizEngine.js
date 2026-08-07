// Alphabet ranges based on Japanese kana reading
const KANA_RANGES = {
    a: {
        label: 'あ〜お',
        start: 'あ',
        end: 'か',
    },

    ka: {
        label: 'か〜こ',
        start: 'か',
        end: 'さ',
    },

    sa: {
        label: 'さ〜そ',
        start: 'さ',
        end: 'た',
    },

    ta: {
        label: 'た〜と',
        start: 'た',
        end: 'な',
    },

    na: {
        label: 'な〜の',
        start: 'な',
        end: 'は',
    },

    ha: {
        label: 'は〜ほ',
        start: 'は',
        end: 'ま',
    },

    ma: {
        label: 'ま〜も',
        start: 'ま',
        end: 'や',
    },

    ya: {
        label: 'や〜よ',
        start: 'や',
        end: 'ら',
    },

    ra: {
        label: 'ら〜ろ',
        start: 'ら',
        end: 'わ',
    },

    wa: {
        label: 'わ〜ん',
        start: 'わ',
        end: '\uffff',
    },
};


// Shuffle array
function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}


// Create quiz
export function createQuiz({
    allWords = [],
    alphabet = 'all',
    type = 'all',
    count = 10,
}) {
    let words = [...allWords];

    // Alphabet filter
    if (alphabet !== 'all') {
        const range = KANA_RANGES[alphabet];

        if (range) {
            words = words.filter((word) => {
                return (
                    word.kana >= range.start &&
                    word.kana < range.end
                );
            });
        }
    }

    // Type filter
    if (type !== 'all') {
        words = words.filter(
            (word) => word.type === type
        );
    }

    // Shuffle
    words = shuffle(words);

    // Number of questions
    words = words.slice(0, Number(count));

    return words;
}


// Export ranges for UI
export function getKanaRanges() {
    return KANA_RANGES;
}