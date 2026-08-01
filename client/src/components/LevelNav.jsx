import React from 'react';
import { useApp } from '../context/AppContext';

const LEVELS = ['all', 'N5', 'N4', 'N3', 'N2', 'N1'];
const LABELS = { all: '全て · ALL', N5: 'N5', N4: 'N4', N3: 'N3', N2: 'N2', N1: 'N1' };

export default function LevelNav() {
  const { currentLevel, dispatch } = useApp();

  return (
    <nav className="level-nav" aria-label="JLPT Level filter">
      {LEVELS.map((level) => (
        <button
          key={level}
          className={`level-btn ${currentLevel === level ? 'active' : ''}`}
          data-level={level}
          id={`btn-${level}`}
          aria-pressed={currentLevel === level}
          onClick={() => dispatch({ type: 'SET_LEVEL', payload: level })}
        >
          <span>{LABELS[level]}</span>
        </button>
      ))}
    </nav>
  );
}
