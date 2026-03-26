/* ─── THEME TOGGLE ──────────────────────────────────────────
   Persists choice in localStorage.
   Apply saved theme before paint (avoids flash).
─────────────────────────────────────────────────────────── */

(function () {
  var saved = localStorage.getItem('solvefy-theme');
  if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
})();

function toggleTheme() {
  var html = document.documentElement;
  var current = html.getAttribute('data-theme');
  if (current === 'light') {
    html.removeAttribute('data-theme');
    localStorage.setItem('solvefy-theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
    localStorage.setItem('solvefy-theme', 'light');
  }
}
