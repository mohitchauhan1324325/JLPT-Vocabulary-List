import React, { useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';

export default function Toast() {
  const { toast } = useApp();
  const ref = useRef(null);

  useEffect(() => {
    if (toast && ref.current) {
      ref.current.classList.add('show');
    } else if (ref.current) {
      ref.current.classList.remove('show');
    }
  }, [toast]);

  return (
    <div
      className={`toast ${toast ? 'show' : ''}`}
      id="toast"
      role="alert"
      aria-live="polite"
      ref={ref}
    >
      {toast}
    </div>
  );
}
