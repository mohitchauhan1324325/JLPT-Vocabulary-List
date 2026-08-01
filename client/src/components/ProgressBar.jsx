import React from 'react';
import { useApp } from '../context/AppContext';

// Total words in the full DB (across all levels) — used for progress %
const TOTAL_VOCAB = 100;

export default function ProgressBar() {
  const { mastered } = useApp();
  const pct = Math.round((mastered.length / TOTAL_VOCAB) * 100);

  return (
    <div className="progress-section" aria-label="Learning progress">
      <div className="progress-label">
        学習の進捗 · Learning Progress ({pct}%)
      </div>
      <div
        className="progress-bar-container"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        id="progressBar"
      >
        <div
          className="progress-bar-fill"
          id="progressFill"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
