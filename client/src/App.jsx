import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { AppProvider } from './context/AppContext.jsx';
import { useAuth } from './context/AuthContext.jsx';

import Home from './pages/Home.jsx';
import Vocabulary from './pages/Vocabulary.jsx';
import Quiz from './pages/Quiz.jsx';
import Flashcards from './pages/FlashCards.jsx';
import Auth from './pages/Auth.jsx';
import Toast from './components/Toast.jsx';

function ProtectedApp() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AppProvider>
      <Routes>
        <Route
          path="/vocabulary"
          element={<Vocabulary />}
        />

        <Route
          path="/quiz"
          element={<Quiz />}
        />

        <Route
          path="/flashcards"
          element={<Flashcards />}
        />
      </Routes>

      <Toast />
    </AppProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Landing Page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Auth />}
        />

        {/* Protected Pages */}
        <Route
          path="/*"
          element={<ProtectedApp />}
        />

        {/* Fallback */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}