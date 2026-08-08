import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { renderFurigana } from '../utils/furigana';
import { speakJapanese } from '../utils/speech';

const TYPE_CHAR = {
  verb: '動',
  noun: '名',
  adjective: '形',
  adverb: '副',
  expression: '表',
  question: '疑',
  number: '数',
  counter: '助',
  prefix: '接',
};

const TYPE_LABEL = {
  verb: '動詞',
  noun: '名詞',
  adjective: '形容詞',
  adverb: '副詞',
  expression: '表現',
  question: '疑問詞',
  number: '数詞',
  counter: '助数詞',
  prefix: '接頭語',
};

export default function VocabCard({ word, index }) {
  const { favorites, mastered, toggleFavorite, toggleMastered } = useApp();
  const [expanded, setExpanded] = useState(false);

  const key = word.kanji + word.kana;
  const isFav = favorites.includes(key);
  const isMastered = mastered.includes(key);

  const handleFav = (e) => {
    e.stopPropagation();
    toggleFavorite(key, word.kanji);
  };

  const handleMastered = (e) => {
    e.stopPropagation();
    toggleMastered(key, word.kanji);
  };

  return (
    <div
      className={`vocab-card level-${word.level} ${expanded ? 'expanded' : ''}`}
      data-type-char={TYPE_CHAR[word.type] || '語'}
      role="listitem"
      tabIndex={0}
      aria-label={`${word.kanji}, ${word.kana}, ${word.meaning}`}
      style={{
        animationDelay: `${Math.min(index * 0.03, 0.4)}s`,
        opacity: isMastered ? 0.72 : 1,
      }}
      onClick={() => setExpanded((p) => !p)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setExpanded((p) => !p);
        }
      }}
    >
      <div className="vocab-card-inner">
        {/* Header row */}
        <div className="card-header">
          <div className="kanji-display">
            <span className="kanji-main">{word.kanji}</span>
            <span className="kana-reading">{word.kana}</span>
          </div>
          <div className="card-badges">
            <span className={`level-badge badge-${word.level}`}>{word.level}</span>
            <span className={`type-badge ${word.type}`}>
              {TYPE_LABEL[word.type] || word.type}
            </span>
          </div>
        </div>

        <div className="card-divider" />

        {/* Meaning */}
        <div className="meaning-section">
          <span className="meaning-label">意味</span>
          <span className="meaning-text">{word.meaning}</span>
        </div>
        <div className="romaji-text">{word.romaji}</div>

        {/* Example — shown on hover/expand */}
        <div className="example-section">
          <div className="example-jp">
            {renderFurigana(word.example)}
          </div>

          <div className="example-romaji">
            {word.exampleRomaji}
          </div>

          <div className="example-en">
            {word.exampleMeaning}
          </div>
        </div>

        {/* Action buttons */}
        <div className="card-actions" onClick={(e) => e.stopPropagation()}>
          <button
            className={`fav-btn ${isFav ? 'active' : ''}`}
            aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
            onClick={handleFav}
            title="お気に入り"
          >
            {isFav ? '♥' : '♡'}
          </button>
          <button
            className={`master-btn ${isMastered ? 'active' : ''}`}
            aria-label={isMastered ? 'Mark as unmastered' : 'Mark as mastered'}
            onClick={handleMastered}
            title="覚えた"
          >
            {isMastered ? '✓' : '○'}
          </button>
        </div>
      </div>
    </div>
  );
}
