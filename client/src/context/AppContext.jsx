import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
  useRef,
} from 'react';
import {
  fetchVocab,
  fetchAllWords,
  fetchProgress,
  toggleFavorite as apiFav,
  toggleMastered as apiMastered,
  updateQuizScore as apiQuiz,
} from '../api';

// ── Context ──
const AppContext = createContext(null);

// ── Initial State ──
const initialState = {
  // Data from server
  words: [],
  allWords: [],
  loadingWords: true,
  favorites: [],
  mastered: [],
  quizScore: { correct: 0, total: 0 },
  loadingProgress: true,
  error: null,

  // UI state
  currentLevel: 'all',
  currentType: 'all',
  searchQuery: '',
  currentMode: 'list',
  toast: null,

  //pages
  currentPage: 1,
  totalPages: 1,
};

// ── Reducer ──
function reducer(state, action) {
  switch (action.type) {
    case 'SET_WORDS':
      return { ...state, words: action.payload, loadingWords: false };
    case 'SET_ALL_WORDS':
      return {
        ...state,
        allWords: action.payload,
      };
    case 'SET_LOADING_WORDS':
      return { ...state, loadingWords: action.payload };
    case 'SET_PROGRESS':
      return {
        ...state,
        favorites: action.payload.favorites || [],
        mastered: action.payload.mastered || [],
        quizScore: action.payload.quizScore || { correct: 0, total: 0 },
        loadingProgress: false,
      };
    case 'SET_FAVORITES':
      return { ...state, favorites: action.payload };
    case 'SET_MASTERED':
      return { ...state, mastered: action.payload };
    case 'SET_QUIZ_SCORE':
      return { ...state, quizScore: action.payload };
    case 'SET_LEVEL':
      return {
        ...state,
        currentLevel: action.payload,
        currentPage: 1,
      };

    case 'SET_TYPE':
      return {
        ...state,
        currentType: action.payload,
        currentPage: 1,
      };

    case 'SET_SEARCH':
      return {
        ...state,
        searchQuery: action.payload,
        currentPage: 1,
      };
    case 'SET_MODE':
      return { ...state, currentMode: action.payload };
    case 'SHOW_TOAST':
      return { ...state, toast: action.payload };
    case 'HIDE_TOAST':
      return { ...state, toast: null };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loadingWords: false };
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_TOTAL_PAGES':
      return { ...state, totalPages: action.payload };
    default:
      return state;
  }
}

// ── Provider ──
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toastTimer = useRef(null);

  // Load words from API whenever level/type/search changes
  useEffect(() => {

    const params = {};

    if (state.currentLevel !== 'all')
      params.level = state.currentLevel;

    if (state.currentType !== 'all')
      params.type = state.currentType;

    if (state.searchQuery)
      params.search = state.searchQuery;

    dispatch({
      type: 'SET_LOADING_WORDS',
      payload: true,
    });

    // Pagination
    fetchVocab({
      ...params,
      page: state.currentPage,
      limit: 20,
    })
      .then((res) => {
        dispatch({
          type: 'SET_WORDS',
          payload: res.data,
        });

        dispatch({
          type: 'SET_TOTAL_PAGES',
          payload: res.totalPages,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'SET_ERROR',
          payload: err.message,
        });
      });

    // All Words
    fetchAllWords(params)
      .then((res) => {
        dispatch({
          type: 'SET_ALL_WORDS',
          payload: res.data,
        });
      })
      .catch((err) => console.error(err));

  }, [
    state.currentLevel,
    state.currentType,
    state.searchQuery,
    state.currentPage,
  ]);

  // Load progress once on mount
  useEffect(() => {
    fetchProgress()
      .then((res) => dispatch({ type: 'SET_PROGRESS', payload: res.data }))
      .catch(() => dispatch({ type: 'SET_PROGRESS', payload: {} }));
  }, []);

  // Toast helper
  const showToast = useCallback((message, duration = 2400) => {
    clearTimeout(toastTimer.current);
    dispatch({ type: 'SHOW_TOAST', payload: message });
    toastTimer.current = setTimeout(
      () => dispatch({ type: 'HIDE_TOAST' }),
      duration
    );
  }, []);

  // Toggle Favorite
  const toggleFavorite = useCallback(
    async (key, kanjiLabel) => {
      try {
        const res = await apiFav(key);
        dispatch({ type: 'SET_FAVORITES', payload: res.favorites });
        const msg =
          res.action === 'added'
            ? `お気に入りに追加しました ♥ 「${kanjiLabel}」`
            : `お気に入りから削除しました 「${kanjiLabel}」`;
        showToast(msg);
      } catch {
        showToast('エラーが発生しました · Error occurred');
      }
    },
    [showToast]
  );

  // Toggle Mastered
  const toggleMastered = useCallback(
    async (key, kanjiLabel) => {
      try {
        const res = await apiMastered(key);
        dispatch({ type: 'SET_MASTERED', payload: res.mastered });
        if (res.action === 'added') showToast(`「${kanjiLabel}」を覚えました！ ✓`);
      } catch {
        showToast('エラーが発生しました · Error occurred');
      }
    },
    [showToast]
  );

  // Update Quiz Score
  const recordQuizAnswer = useCallback(
    async (correct) => {
      try {
        const res = await apiQuiz(correct);
        dispatch({ type: 'SET_QUIZ_SCORE', payload: res.quizScore });
      } catch {
        // silently fail — don't block quiz UX
      }
    },
    []
  );

  const value = {
    ...state,
    dispatch,
    showToast,
    toggleFavorite,
    toggleMastered,
    recordQuizAnswer,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// ── Hook ──
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
