import { useEffect } from 'react';
import { useApp } from '../context/AppContext';

import Header from '../components/Header';
import Background from '../components/Background';
import SearchBar from '../components/SearchBar';
import LevelNav from '../components/LevelNav';
import StatsBar from '../components/StatsBar';
import ProgressBar from '../components/ProgressBar';
import FilterControls from '../components/FilterControls';
import VocabCard from '../components/VocabCard';
import Navbar from '../components/Navbar';

export default function Vocabulary() {
  const {
    words,
    loadingWords,
    dispatch,
    showToast,
    currentPage,
    totalPages,
  } = useApp();

  // Welcome toast
  useEffect(() => {
    const timer = setTimeout(() => {
      showToast('ようこそ！JLPT語彙学習へ · Welcome to JLPT Vocab!');
    }, 900);

    return () => clearTimeout(timer);
  }, [showToast]);

  console.log("fetchVocabByLevel");
  

  return (
    <>
      <Background />

      <div id="app">

        <Navbar />

        <Header />

        <SearchBar />

        <LevelNav />

        <StatsBar />

        <ProgressBar />

        <FilterControls />

        {/* Vocabulary List */}
        <main aria-label="Vocabulary list">

          {loadingWords ? (
            <div className="loading-state">
              ...
            </div>
          ) : words.length === 0 ? (
            <div className="empty-state">
              ...
            </div>
          ) : (
            <>
              <div
                className="vocab-grid"
                id="vocabGrid"
                role="list"
              >
                {words.map((word, i) => (
                  <VocabCard
                    key={word._id}
                    word={word}
                    index={i}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="pagination">

                  <button
                    className="page-btn"
                    disabled={currentPage === 1}
                    onClick={() =>
                      dispatch({
                        type: 'SET_PAGE',
                        payload: currentPage - 1,
                      })
                    }
                  >
                    ← Previous
                  </button>

                  <span className="page-info">
                    Page {currentPage} of {totalPages}
                  </span>

                  <button
                    className="page-btn"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      dispatch({
                        type: 'SET_PAGE',
                        payload: currentPage + 1,
                      })
                    }
                  >
                    Next →
                  </button>

                </div>
              )}
            </>
          )}

        </main>

        {/* Footer */}
        <footer
          className="site-footer"
          role="contentinfo"
        >
          <div
            className="footer-mon"
            aria-hidden="true"
          >
            ⌘ 菊 ⌘
          </div>

          <p className="footer-text">
            日本語能力試験対策 · JLPT Study Tool · 一期一会
          </p>

          <p
            className="footer-text"
            style={{
              marginTop: '6px',
              fontSize: '11px',
              opacity: 0.7,
            }}
          >
            語学の道は遠く、されど一歩から ·
            The road of language is long, yet starts with one step
          </p>
        </footer>

      </div>
    </>
  );
}