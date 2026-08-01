import React from 'react';
import { useApp } from '../context/AppContext';

export default function StatsBar() {
  const { words, mastered, favorites, quizScore } = useApp();

  const pct =
    quizScore.total > 0
      ? Math.round((quizScore.correct / quizScore.total) * 100)
      : 0;

  return (
    <section className="stats-bar" aria-label="Statistics">
      <div className="stat-item">
        <span className="stat-number" id="totalWords">
          {words.length}
        </span>
        <span className="stat-label">Total Words</span>
      </div>
      <div className="stat-item">
        <span className="stat-number" id="masteredWords">
          {mastered.length}
        </span>
        <span className="stat-label">Mastered</span>
      </div>
      <div className="stat-item">
        <span className="stat-number" id="favCount">
          {favorites.length}
        </span>
        <span className="stat-label">Favorites</span>
      </div>
      <div className="stat-item">
        <span className="stat-number" id="quizScore">
          {pct}%
        </span>
        <span className="stat-label">Quiz Score</span>
      </div>
    </section>
  );
}
