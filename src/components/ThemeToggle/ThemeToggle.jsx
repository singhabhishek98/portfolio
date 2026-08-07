import React, { useEffect, useState } from 'react';

const themes = {
  light: {
    primary: '#ffffff',
    secondary: '#444f5a',
    accent: '#0564bd',
    primaryRGB: '255, 255, 255',
    secondaryRGB: '68, 79, 90',
  },
  dark: {
    primary: '#212121',
    secondary: '#a2a1a6',
    accent: '#0564bd',
    primaryRGB: '33, 33, 33',
    secondaryRGB: '162,161,166',
  },
};

function applyTheme(themeName) {
  const theme = themes[themeName];
  const root = document.documentElement;
  root.style.setProperty('--bs-primary', theme.primary);
  root.style.setProperty('--bs-secondary', theme.secondary);
  root.style.setProperty('--bs-accent', theme.accent);
  root.style.setProperty('--bs-primary-rgb', theme.primaryRGB);
  root.style.setProperty('--bs-secondary-rgb', theme.secondaryRGB);
  root.dataset.theme = themeName;
  root.classList.add('theme-transition');

  return window.setTimeout(() => root.classList.remove('theme-transition'), 500);
}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');

  useEffect(() => {
    const timer = applyTheme(theme);
    window.localStorage.setItem('theme', theme);
    return () => window.clearTimeout(timer);
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <button
      className="toggle"
      id="theme"
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <input className="input" id="switch" type="checkbox" checked={isDark} readOnly tabIndex={-1} />
      <span className="icon icon--moon"><i className="bi bi-moon-fill" /></span>
      <span className="icon icon--sun"><i className="bi bi-brightness-high-fill" /></span>
    </button>
  );
}

export default ThemeToggle;
