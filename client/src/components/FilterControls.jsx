import React from 'react';
import { useApp } from '../context/AppContext';

const TYPES = [
  { value: 'all', label: 'すべて · All' },
  { value: 'noun', label: '名詞 · Noun' },
  { value: 'verb', label: '動詞 · Verb' },
  { value: 'adjective', label: '形容詞 · Adjective' },
  { value: 'adverb', label: '副詞 · Adverb' },
  { value: 'counter', label: '助数詞 · Counter' },
  { value: 'expression', label: '表現 · Expression' },
  { value: 'pronoun', label: '代名詞 · Pronoun' },
  { value: 'prefix', label: '接頭辞 · Prefix' },
  { value: 'suffix', label: '接尾辞 · Suffix' },
  { value: 'conjunction', label: '接続詞 · Conjunction' },
  { value: 'interjection', label: '感動詞 · Interjection' },
  { value: 'particle', label: '助詞 · Particle' },
  { value: 'number', label: '数 · Number' },
  { value: 'question', label: '疑問詞 · Question Word' },
];

export default function FilterControls() {
  const { currentType, dispatch } = useApp();

  return (
    <div
      className="filter-controls"
      id="typeFilters"
      aria-label="Word type filter"
    >
      {TYPES.map(({ value, label }) => (
        <button
          key={value}
          className={`filter-btn ${currentType === value ? 'active' : ''}`}
          onClick={() =>
            dispatch({
              type: 'SET_TYPE',
              payload: value,
            })
          }
        >
          {label}
        </button>
      ))}
    </div>
  );
}