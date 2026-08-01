import React, {
  useState,
  useEffect,
  useCallback,
} from "react";

import { useApp } from "../context/AppContext";
import { renderFurigana } from "../utils/furigana";

/* ---------------- Helpers ---------------- */

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/* ---------------- Component ---------------- */

export default function FlashcardMode() {

  const {
    allWords,
    toggleMastered,
  } = useApp();

  const [index, setIndex] = useState(0);

  const [flipped, setFlipped] =
    useState(false);

  const total = allWords.length;

  const word =
    total > 0
      ? allWords[
      clamp(index, 0, total - 1)
      ]
      : null;

  /* ---------------- Reset ---------------- */

  useEffect(() => {

    setIndex(0);

    setFlipped(false);

  }, [allWords]);

  /* ---------------- Previous ---------------- */

  const prev = useCallback(() => {

    if (total === 0) return;

    setFlipped(false);

    setTimeout(() => {

      setIndex((i) =>

        i === 0
          ? total - 1
          : i - 1

      );

    }, 120);

  }, [total]);

  /* ---------------- Next ---------------- */

  const next = useCallback(() => {

    if (total === 0) return;

    setFlipped(false);

    setTimeout(() => {

      setIndex((i) =>

        i === total - 1
          ? 0
          : i + 1

      );

    }, 120);

  }, [total]);

  /* ---------------- Mastered ---------------- */

  const handleMaster =
    useCallback(() => {

      if (!word) return;

      toggleMastered(
        word.kanji + word.kana,
        word.kanji
      );

      next();

    }, [
      word,
      toggleMastered,
      next,
    ]);

  /* ---------------- Flip ---------------- */

  const flipCard = () => {

    setFlipped((f) => !f);

  };
  /* ---------------- Keyboard ---------------- */

  useEffect(() => {

    const handler = (e) => {

      switch (e.key) {

        case "ArrowRight":
          next();
          break;

        case "ArrowLeft":
          prev();
          break;

        case " ":
          e.preventDefault();
          flipCard();
          break;

        case "Enter":
          flipCard();
          break;

        case "m":
        case "M":
          handleMaster();
          break;

        default:
          break;
      }

    };

    window.addEventListener(
      "keydown",
      handler
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handler
      );

  }, [
    next,
    prev,
    handleMaster,
  ]);

  /* ---------------- Empty ---------------- */

  if (!word) {

    return (

      <section
        className="flashcard-mode visible"
      >

        <div className="empty-state">

          <span className="empty-kanji">
            無
          </span>

          <p className="empty-text">

            No flashcards found.

          </p>

        </div>

      </section>

    );

  }

  /* ---------------- UI ---------------- */

  return (

    <section
      className="flashcard-mode visible"
      aria-label="Flashcard Mode"
    >

      <div className="fc-progress">

        Card

        {" "}

        {index + 1}

        {" / "}

        {total}

      </div>

      <progress
        value={index + 1}
        max={total}
        style={{
          width: "100%",
          height: 10,
          marginBottom: 20,
        }}
      />

      <div
        className="flashcard-container"
      >

        <div
          className={`flashcard ${flipped
            ? "flipped"
            : ""
            }`}
          onClick={flipCard}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {

            if (
              e.key === "Enter" ||
              e.key === " "
            ) {

              e.preventDefault();

              flipCard();

            }

          }}
        >

          {/* FRONT */}

          <div
            className="flashcard-face flashcard-front"
          >

            <div className="flashcard-kanji">

              {word.kanji}

            </div>

            <div
              className="flashcard-kana"
            >

              {word.kana}

            </div>

            <div
              className="flashcard-hint"
            >

              Click to reveal

            </div>

          </div>

          {/* BACK */}

          <div
            className="flashcard-face flashcard-back"
          >

            <div className="flashcard-meaning">

              {word.meaning}

            </div>

            <div className="flashcard-romaji">

              {word.romaji}

            </div>
            {word.example && (
              <div
                className="flashcard-example"
                style={{ marginTop: 16 }}
              >
                <strong>Example</strong>

                <p>{renderFurigana(word.example)}</p>
              </div>
            )}

            {word.exampleMeaning && (
              <div
                className="flashcard-example-meaning"
                style={{ marginTop: 10 }}
              >
                <strong>Translation</strong>

                <p>{word.exampleMeaning}</p>
              </div>
            )}

          </div>

        </div>

      </div>

      <div
        className="flashcard-controls"
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >

        <button
          className="fc-btn"
          onClick={prev}
        >
          ← Previous
        </button>

        <button
          className="fc-btn primary"
          onClick={handleMaster}
        >
          ✓ Mastered
        </button>

        <button
          className="fc-btn"
          onClick={next}
        >
          Next →
        </button>

      </div>

      <p
        className="fc-hint-text"
        style={{
          marginTop: 18,
          textAlign: "center",
          opacity: 0.75,
          fontSize: 14,
        }}
      >
        ⌨️ Left / Right Arrow = Navigate
        <br />
        Space / Enter = Flip Card
        <br />
        M = Mark as Mastered
      </p>

    </section>
  );
}