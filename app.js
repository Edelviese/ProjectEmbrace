
// Navigation helper
function goTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  window.scrollTo(0, 0);
}

// Emotion button
document.querySelectorAll('.emotion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const emotion = btn.dataset.emotion;
    showMotivation(emotion, btn.style.getPropertyValue('--bg'));
  });
});

// random quote for the chosen emotion
function showMotivation(emotion, badgeBg) {
  const pool = QUOTES[emotion];
  if (!pool || pool.length === 0) return;

  const pick = pool[Math.floor(Math.random() * pool.length)];

  document.getElementById('quote-text').textContent = `"${pick.text}"`;
  document.getElementById('quote-author').textContent = pick.author;

  const badge = document.getElementById('emotion-badge');
  badge.textContent = emotion;
  badge.style.background = badgeBg;

  const hex = badgeBg.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  badge.style.color = lum > 0.55 ? '#1a1a1a' : '#ffffff';

  goTo('page-motivation');
}
