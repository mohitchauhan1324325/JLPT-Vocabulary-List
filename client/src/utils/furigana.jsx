import React from "react";

export function renderFurigana(text = "") {
  const regex = /([\u3400-\u9FFF々ヶ]+)\[([^\]]+)\]/g;

  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    // Text before the kanji
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // Kanji + Furigana
    parts.push(
      <ruby key={key++}>
        {match[1]}
        <rt>{match[2]}</rt>
      </ruby>
    );

    lastIndex = regex.lastIndex;
  }

  // Remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}