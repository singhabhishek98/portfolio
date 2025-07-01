const themeToggler = document.querySelector('#theme');
const moonIcon = document.querySelector('.bi-moon-fill');
const sunIcon = document.querySelector('.bi-brightness-high-fill');
const themes = {
  light: {
    primary: '#ffffff',
    secondary: '#444f5a',
    accent: '#0564bd',
    primaryRGB: '255, 255, 255',
    secondaryRGB: '68, 79, 90'
  },

  dark: {
    primary: '#22222b',
    secondary: '#a2a1a6',
    accent: '#0564bd',
    primaryRGB: '34, 34, 43',
    secondaryRGB: '162,161,166'
  }
};

let isLight = true;

// On page load, check localStorage for theme preference
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    applyTheme(themes.dark);
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
    isLight = false;
  } else {
    applyTheme(themes.light);
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
    isLight = true;
  }
});

themeToggler.addEventListener('click', toggleThemes);

function applyTheme(obj) {
  document.documentElement.style.setProperty('--bs-primary', obj.primary);
  document.documentElement.style.setProperty('--bs-secondary', obj.secondary);
  document.documentElement.style.setProperty('--bs-accent', obj.accent);
  document.documentElement.style.setProperty(
    '--bs-primary-rgb',
    obj.primaryRGB
  );
  document.documentElement.style.setProperty(
    '--bs-secondary-rgb',
    obj.secondaryRGB
  );
  // Add transition class for smooth theme change
  document.documentElement.classList.add('theme-transition');
  window.setTimeout(function() {
    document.documentElement.classList.remove('theme-transition');
  }, 500);
}

function toggleThemes() {
  if (isLight) {
    applyTheme(themes.dark);
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
    localStorage.setItem('theme', 'dark');
    isLight = false;
  } else {
    applyTheme(themes.light);
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
    localStorage.setItem('theme', 'light');
    isLight = true;
  }
}
