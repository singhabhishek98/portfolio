const themeToggler = document.querySelector('#theme');
const switchInput = document.querySelector('#switch');
const moonIcon = document.querySelector('.icon--moon');
const sunIcon = document.querySelector('.icon--sun');
const themes = {
  light: {
    primary: '#ffffff',
    secondary: '#444f5a',
    accent: '#0564bd',
    primaryRGB: '255, 255, 255',
    secondaryRGB: '68, 79, 90'
  },

  dark: {
    primary: '#212121',
    secondary: '#a2a1a6',
    accent: '#0564bd',
    primaryRGB: '33, 33, 33',
    secondaryRGB: '162,161,166'
  }
};

let isLight = true;

// On page load, check localStorage for theme preference
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    applyTheme(themes.dark);
    switchInput.checked = true;
    isLight = false;
  } else {
    applyTheme(themes.light);
    switchInput.checked = false;
    isLight = true;
  }
});

// Add click event to toggle div
themeToggler.addEventListener('click', () => {
  switchInput.checked = !switchInput.checked;
  toggleThemes();
});

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
  if (switchInput.checked) {
    // Switch to dark mode
    applyTheme(themes.dark);
    localStorage.setItem('theme', 'dark');
    isLight = false;
  } else {
    // Switch to light mode
    applyTheme(themes.light);
    localStorage.setItem('theme', 'light');
    isLight = true;
  }
}
