import React, { useCallback, useRef } from 'react';
import { useApp } from '../context/AppContext';

export default function SearchBar() {
  const { dispatch } = useApp();
  const timerRef = useRef(null);

  const handleChange = useCallback(
    (e) => {
      clearTimeout(timerRef.current);
      const val = e.target.value;
      timerRef.current = setTimeout(() => {
        dispatch({ type: 'SET_SEARCH', payload: val.trim() });
      }, 280);
    },
    [dispatch]
  );

  return (
    <section className="search-section" aria-label="Search vocabulary">
      <div className="search-wrapper">
        <input
          type="search"
          id="searchInput"
          className="search-input"
          placeholder="Search kanji, kana, meaning… 検索"
          aria-label="Search vocabulary"
          onChange={handleChange}
        />
        <span className="search-icon" aria-hidden="true">🔍</span>
      </div>
    </section>
  );
}
