import React, { useEffect, useRef } from 'react';

const BG_CHARS = ['語', '彙', '学', '道', '心', '力', '風', '花', '水', '山', '月', '星', '夢', '空', '海'];
const PETALS = ['🌸', '🌺', '🍃'];

export default function Background() {
  const bgRef = useRef(null);
  const petalsRef = useRef(null);
  const petalInterval = useRef(null);

  useEffect(() => {
    // Floating kanji
    const bg = bgRef.current;
    for (let i = 0; i < 12; i++) {
      const el = document.createElement('div');
      el.className = 'bg-kanji-char';
      el.textContent = BG_CHARS[Math.floor(Math.random() * BG_CHARS.length)];
      el.style.left = Math.random() * 100 + 'vw';
      el.style.animationDuration = (25 + Math.random() * 40) + 's';
      el.style.animationDelay = (Math.random() * 30) + 's';
      el.style.fontSize = (60 + Math.random() * 100) + 'px';
      bg.appendChild(el);
    }

    // Sakura petals
    const container = petalsRef.current;
    const createPetal = () => {
      const el = document.createElement('div');
      el.className = 'petal';
      el.textContent = PETALS[Math.floor(Math.random() * PETALS.length)];
      el.style.left = Math.random() * 100 + 'vw';
      el.style.fontSize = (10 + Math.random() * 10) + 'px';
      el.style.animationDuration = (8 + Math.random() * 12) + 's';
      container.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    };

    // Seed a few immediately
    for (let i = 0; i < 3; i++) setTimeout(createPetal, i * 800);
    petalInterval.current = setInterval(createPetal, 2200);

    return () => {
      clearInterval(petalInterval.current);
    };
  }, []);

  return (
    <>
      <div className="bg-kanji" ref={bgRef} aria-hidden="true" />
      <div ref={petalsRef} aria-hidden="true" />
    </>
  );
}
