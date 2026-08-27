import React from 'react';
import { AppProvider } from './context/AppContext';
import { useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Toast from './components/Toast';
import Auth from './pages/Auth';

function AppContent() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Auth />;
  }

  return (
    <AppProvider>
      <Home />
      <Toast />
    </AppProvider>
  );
}

export default function App() {
  return <AppContent />;
}