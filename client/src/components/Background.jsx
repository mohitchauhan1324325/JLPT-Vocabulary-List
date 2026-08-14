import React, { useEffect, useRef } from 'react';

const BG_CHARS = ['語', '彙', '学', '道', '心', '力', '風', '花', '水', '山', '月', '星', '夢', '空', '海'];
const PETALS = ['🌸', '🌺', '🍃'];

const MAX_PETALS = 12;

export default function Background() {
  const bgRef = useRef(null);
  const petalsRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    const container = petalsRef.current;

    if (!bg || !container) return;

    // ── Floating Kanji ──
    for (let i = 0; i < 12; i++) {
      const el = document.createElement('div');

      el.className = 'bg-kanji-char';
      el.textContent =
        BG_CHARS[Math.floor(Math.random() * BG_CHARS.length)];

      el.style.left = Math.random() * 100 + 'vw';
      el.style.animationDuration = 25 + Math.random() * 40 + 's';
      el.style.animationDelay = Math.random() * 30 + 's';
      el.style.fontSize = 60 + Math.random() * 100 + 'px';

      bg.appendChild(el);
    }

    // ── Sakura Petals ──
    const createPetal = () => {
      // Never allow more than MAX_PETALS
      if (container.children.length >= MAX_PETALS) return;

      const el = document.createElement('div');

      el.className = 'petal';
      el.textContent =
        PETALS[Math.floor(Math.random() * PETALS.length)];

      el.style.left = Math.random() * 100 + 'vw';
      el.style.fontSize = 10 + Math.random() * 10 + 'px';
      el.style.animationDuration = 8 + Math.random() * 12 + 's';

      container.appendChild(el);

      const removePetal = () => {
        el.removeEventListener('animationend', removePetal);
        el.remove();
      };

      el.addEventListener('animationend', removePetal);
    };

    // Initial petals
    for (let i = 0; i < MAX_PETALS; i++) {
      setTimeout(createPetal, i * 700);
    }

    // Create new petals slowly
    const interval = setInterval(createPetal, 2200);

    return () => {
      clearInterval(interval);

      // Clean everything when component unmounts
      bg.replaceChildren();
      container.replaceChildren();
    };
  }, []);

  return (
    <>
      <div ref={bgRef} className="bg-kanji-container" />
      <div ref={petalsRef} className="petals-container" />
    </>
  );
}