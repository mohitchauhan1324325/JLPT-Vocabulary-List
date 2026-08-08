import React, { useState, useEffect, useCallback } from "react";
import { useApp } from "../context/AppContext";
import { renderFurigana } from "../utils/furigana";
import { createQuiz, getKanaRanges } from "../utils/QuizEngine";

/* -------------------- Helpers -------------------- */

function shuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function buildQuestion(currentWord, allWords) {
    if (!currentWord || allWords.length < 4) return null;

    const wrongOptions = shuffle(
        allWords.filter(
            (w) =>
                w._id !== currentWord._id &&
                w.meaning !== currentWord.meaning
        )
    ).slice(0, 3);

    const options = shuffle([
        currentWord,
        ...wrongOptions,
    ]);

    return {
        correct: currentWord,
        options,
    };
}

/* -------------------- Component -------------------- */

export default function QuizMode() {

    const {
        allWords,
        quizScore,
        recordQuizAnswer,
        showToast,
        currentLevel,
    } = useApp();

    const kanaRanges = getKanaRanges();

    /* Quiz */
    const [selectedAlphabet, setSelectedAlphabet] = useState('all');
    const [selectedType, setSelectedType] = useState('all');
    const [questionCount, setQuestionCount] = useState(10);
    const [quizWords, setQuizWords] = useState([]);

    const [currentIndex, setCurrentIndex] =
        useState(0);

    const [question, setQuestion] =
        useState(null);

    const [answered, setAnswered] =
        useState(false);

    const [selected, setSelected] =
        useState(null);

    const [finished, setFinished] =
        useState(false);

    /* Session Score */

    const [correctCount, setCorrectCount] =
        useState(0);

    const [wrongCount, setWrongCount] =
        useState(0);

    /* -------------------- Start Quiz -------------------- */

    const startQuiz = () => {
        const quiz = createQuiz({
            allWords,
            alphabet: selectedAlphabet,
            type: selectedType,
            count: questionCount,
        });

        if (quiz.length < 4) {
            showToast('Not enough words for this selection.');
            return;
        }

        setQuizWords(quiz);
        setCurrentIndex(0);
        setFinished(false);
        setAnswered(false);
        setSelected(null);
        setCorrectCount(0);
        setWrongCount(0);

        setQuestion(
            buildQuestion(quiz[0], quiz)
        );
    };

    /* -------------------- Next -------------------- */

    const nextQuestion = useCallback(() => {

        if (currentIndex + 1 >= quizWords.length) {

            setFinished(true);

            setQuestion(null);

            return;

        }

        const nextIndex = currentIndex + 1;

        setCurrentIndex(nextIndex);

        setAnswered(false);

        setSelected(null);

        setQuestion(
            buildQuestion(
                quizWords[nextIndex],
                quizWords
            )
        );

    }, [currentIndex, quizWords]);

    /* -------------------- Restart -------------------- */

    const restartQuiz = () => {
        const quiz = createQuiz({
            allWords,
            alphabet: selectedAlphabet,
            type: selectedType,
            count: questionCount,
        });

        if (quiz.length < 4) {
            showToast('Not enough words for this selection.');
            return;
        }

        setQuizWords(quiz);
        setCurrentIndex(0);
        setFinished(false);
        setAnswered(false);
        setSelected(null);
        setCorrectCount(0);
        setWrongCount(0);

        setQuestion(buildQuestion(quiz[0], quiz));
    };

    /* -------------------- Answer -------------------- */

    const handleAnswer = useCallback(
        async (option) => {

            if (answered || !question) return;

            setAnswered(true);

            setSelected(option.meaning);

            const correct =
                option.meaning ===
                question.correct.meaning;

            if (correct) {

                setCorrectCount((c) => c + 1);

            } else {

                setWrongCount((w) => w + 1);

            }

            await recordQuizAnswer(correct);

            if (correct) {

                showToast(
                    `✅ Correct! ${question.correct.kanji} = ${question.correct.meaning}`
                );

            } else {

                showToast(
                    `❌ Correct Answer: ${question.correct.meaning}`
                );

            }

        },
        [
            answered,
            question,
            recordQuizAnswer,
            showToast,
        ]
    );

    /* -------------------- Keyboard -------------------- */

    useEffect(() => {
        const handleKeyDown = (e) => {

            if (!question || answered) return;

            if (e.key >= "1" && e.key <= "4") {

                const index = Number(e.key) - 1;

                if (question.options[index]) {
                    handleAnswer(question.options[index]);
                }

            }

        };

        window.addEventListener("keydown", handleKeyDown);

        return () =>
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
    }, [question, answered, handleAnswer]);

    /* -------------------- Accuracy -------------------- */

    const accuracy =
        quizWords.length > 0
            ? Math.round(
                (correctCount / quizWords.length) * 100
            )
            : 0;

    const overallAccuracy =
        quizScore.total > 0
            ? Math.round(
                (quizScore.correct /
                    quizScore.total) *
                100
            )
            : 0;

    /* -------------------- Empty -------------------- */



    /* -------------------- Finish -------------------- */

    if (finished) {

        return (

            <section className="quiz-mode visible">

                <div className="quiz-finished">

                    <h2>
                        🎉 Quiz Completed!
                    </h2>

                    <h3>
                        Session Score
                    </h3>

                    <p>
                        {correctCount} / {quizWords.length}
                    </p>

                    <p>
                        Accuracy : {accuracy}%
                    </p>

                    <hr />

                    <h3>
                        Overall Progress
                    </h3>

                    <p>
                        Correct : {quizScore.correct}
                    </p>

                    <p>
                        Total : {quizScore.total}
                    </p>

                    <p>
                        Accuracy : {overallAccuracy}%
                    </p>

                    <button
                        className="quiz-next-btn visible"
                        onClick={restartQuiz}
                    >
                        🔄 Restart Quiz
                    </button>

                </div>

            </section>

        );

    }

    /* -------------------- UI -------------------- */

    return (

        <section
            className="quiz-mode visible"
            aria-label="Quiz Mode"
        >

            <div className="quiz-alphabet">
                <button
                    className={selectedAlphabet === 'all' ? 'active' : ''}
                    onClick={() => setSelectedAlphabet('all')}
                >
                    All
                </button>

                {Object.entries(kanaRanges).map(([id, range]) => (
                    <button
                        key={id}
                        className={selectedAlphabet === id ? 'active' : ''}
                        onClick={() => setSelectedAlphabet(id)}
                    >
                        {range.label}
                    </button>
                ))}
            </div>

            <div className="quiz-count">
                <button
                    className={questionCount === 10 ? 'active' : ''}
                    onClick={() => setQuestionCount(10)}
                >
                    10
                </button>

                <button
                    className={questionCount === 20 ? 'active' : ''}
                    onClick={() => setQuestionCount(20)}
                >
                    20
                </button>

                <button
                    className={questionCount === 30 ? 'active' : ''}
                    onClick={() => setQuestionCount(30)}
                >
                    30
                </button>
            </div>

            <div className="quiz-score">

                <strong>
                    Session
                </strong>

                <br />

                ✅ {correctCount}

                &nbsp;&nbsp;

                ❌ {wrongCount}

            </div>

            <div className="quiz-progress">

                Question

                {" "}

                {currentIndex + 1}

                {" / "}

                {quizWords.length}

            </div>

            <progress
                value={currentIndex + 1}
                max={quizWords.length}
                style={{
                    width: "100%",
                    height: 10,
                    marginBottom: 20,
                }}
            />

            {!question && !finished && (
                <button
                    className="quiz-next-btn visible"
                    onClick={startQuiz}
                >
                    ▶ Start Quiz
                </button>
            )}

            {question && (
                <div className="quiz-question">

                    <span className="quiz-question-kanji">
                        {question.correct.kanji}
                    </span>

                    <div className="quiz-question-kana">
                        {question.correct.kana}
                    </div>

                </div>
            )}

            {question && (

                <div
                    className="quiz-options"
                    role="group"
                >

                    {question.options.map((opt, index) => {

                        let cls = "quiz-option";

                        if (answered) {
                            if (opt.meaning === question.correct.meaning) {
                                cls += " correct";
                            } else if (opt.meaning === selected) {
                                cls += " wrong";
                            }
                        }

                        return (
                            <button
                                key={index}
                                className={cls}
                                disabled={answered}
                                onClick={() => handleAnswer(opt)}
                            >
                                <span
                                    style={{
                                        fontWeight: 600,
                                        marginRight: 8,
                                    }}
                                >
                                    {index + 1}.
                                </span>

                                {opt.meaning}
                            </button>
                        );

                    })}

                </div>
            )}

            {answered && (
                <>

                    <div
                        style={{
                            marginTop: 24,
                            padding: 16,
                            borderRadius: 12,
                            background: "#f5f5f5",
                        }}
                    >
                        <h4
                            style={{
                                marginBottom: 10,
                            }}
                        >
                            Explanation
                        </h4>

                        <p>
                            <strong>Kanji:</strong>{" "}
                            {question.correct.kanji}
                        </p>

                        <p>
                            <strong>Kana:</strong>{" "}
                            {question.correct.kana}
                        </p>

                        <p>
                            <strong>Meaning:</strong>{" "}
                            {question.correct.meaning}
                        </p>

                        {question.correct.example && (
                            <>
                                <p
                                    style={{
                                        marginTop: 12,
                                    }}
                                >
                                    <strong>Example:</strong>
                                </p>

                                <p>
                                    {renderFurigana(question.correct.example)}
                                </p>
                            </>
                        )}

                        {question.correct.exampleMeaning && (
                            <>
                                <p
                                    style={{
                                        marginTop: 10,
                                    }}
                                >
                                    <strong>Romaji:</strong>
                                </p>

                                <p>
                                    {question.correct.exampleRomaji}
                                </p>
                            </>
                        )}

                        {question.correct.exampleMeaning && (
                            <>
                                <p
                                    style={{
                                        marginTop: 10,
                                    }}
                                >
                                    <strong>Translation:</strong>
                                </p>

                                <p>
                                    {question.correct.exampleMeaning}
                                </p>
                            </>
                        )}
                    </div>

                    <button
                        className="quiz-next-btn visible"
                        onClick={nextQuestion}
                        style={{
                            marginTop: 20,
                        }}
                    >
                        {currentIndex + 1 ===
                            quizWords.length
                            ? "🏁 Finish Quiz"
                            : "➡ Next Question"}
                    </button>

                    <p
                        style={{
                            marginTop: 16,
                            textAlign: "center",
                            opacity: 0.7,
                            fontSize: 14,
                        }}
                    >
                        Tip: Press keys <strong>1</strong>-
                        <strong>4</strong> to answer quickly.
                    </p>

                </>
            )}

        </section>
    );
}