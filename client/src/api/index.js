import axios from 'axios';

// ── Session ID ──
// Generate a UUID once per browser, stored in localStorage.
// Sent as X-Session-Id header so the server can identify this user's progress.
function getSessionId() {
  let sid = localStorage.getItem('jlpt_session_id');
  if (!sid) {
    // Crypto UUID (available in modern browsers)
    sid = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
    localStorage.setItem('jlpt_session_id', sid);
  }
  return sid;
}

const SESSION_ID = getSessionId();

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
    'x-session-id': SESSION_ID,
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jlpt_token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ── Vocab ──
export const fetchVocab = (params = {}) =>
  api.get('/vocab', { params }).then((r) => r.data);

export const fetchAllWords = (params = {}) =>
  api.get('/vocab', {
    params: {
      ...params,
      all: true,
    },
  }).then((r) => r.data);

export const fetchVocabByLevel = (level) =>
  api.get(`/vocab/${level}`).then((r) => r.data);

export const fetchLevelCounts = () =>
  api.get('/vocab/levels').then((r) => r.data);

// ── Progress ──
export const fetchProgress = () =>
  api.get('/progress').then((r) => r.data);

export const toggleFavorite = (key) =>
  api.put('/progress/favorite', { key }).then((r) => r.data);

export const toggleMastered = (key) =>
  api.put('/progress/mastered', { key }).then((r) => r.data);

export const updateQuizScore = (correct) =>
  api.put('/progress/quiz', { correct }).then((r) => r.data);

export const resetProgress = () =>
  api.delete('/progress/reset').then((r) => r.data);

export { SESSION_ID };
export default api;
