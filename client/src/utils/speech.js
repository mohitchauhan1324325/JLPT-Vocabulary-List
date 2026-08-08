export function speakJapanese(text = '') {
  if (!window.speechSynthesis) {
    alert('Speech synthesis is not supported in this browser.');
    return;
  }

  // Remove furigana notation:
  // 日本語[にほんご] → 日本語
  // 勉強[べんきょう] → 勉強
  const cleanText = text.replace(/\[[^\]]*\]/g, '');

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(cleanText);

  utterance.lang = 'ja-JP';
  utterance.rate = 0.8;
  utterance.pitch = 1;

  window.speechSynthesis.speak(utterance);
}