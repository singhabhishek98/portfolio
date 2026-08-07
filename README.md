# CodeByAbhi Portfolio

A responsive React portfolio for Abhishek Singh, featuring projects, technical skills, GitHub activity, contact details, theme switching and a time-based header greeting.

## Live site

[codebyabhi.netlify.app](https://codebyabhi.netlify.app/)

## Tech stack

- React 19 and Vite
- Bootstrap and Bootstrap Icons
- Ant Design
- AOS, Typed.js and Curtains.js
- EmailJS

## Project structure

```text
src/
├── assets/
│   ├── fonts/
│   ├── gifs/
│   ├── icons/
│   └── images/
├── components/
│   ├── ContactForm/
│   ├── Footer/
│   ├── Header/
│   ├── ProjectCard/
│   ├── ScrollToTop/
│   ├── SkillCard/
│   ├── ThemeToggle/
│   └── WhatsAppButton/
├── data/
│   ├── githubCards.js
│   ├── navigation.js
│   ├── projects.js
│   ├── skills.js
│   └── socialLinks.js
├── pages/
│   └── Home/
├── sections/
│   ├── About/
│   ├── Contact/
│   ├── GitHubContributions/
│   ├── Hero/
│   ├── Projects/
│   └── Skills/
├── styles/
│   ├── framework.css
│   └── globals.css
├── App.jsx
├── index.html
└── main.jsx
```

Static PWA and crawler files such as the favicon, manifest assets, `robots.txt` and `sitemap.xml` live in `public/`.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run serve
```
