import React from 'react';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import Toast from './components/Toast';

export default function App() {
  return (
    <AppProvider>
      <Home />
      <Toast />
    </AppProvider>
  );
}
