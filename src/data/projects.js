import chatxImage from '../assets/images/projects/chatx.png';
import geminiImage from '../assets/images/projects/gemini.png';
import linkedinGeneratorImage from '../assets/images/projects/linkedin-generator.png';
import loginImage from '../assets/images/projects/login.jpg';
import lyraImage from '../assets/images/projects/lyra.png';
import mentorConnectImage from '../assets/images/projects/mentorconnect.png';
import playitImage from '../assets/images/projects/playit.jpg';
import weatherWiseImage from '../assets/images/projects/weatherwise.png';

export const projects = [
  {
    title: 'ChatX',
    image: chatxImage,
    alt: 'ChatX realtime chat application',
    description: 'A MERN Full Stack realtime chat app for interactions.',
    technologies: 'MERN (MongoDB, Express.js, React.js, Node.js), Socket.io, TailwindCSS, DaisyUI, VSCode, Git',
    type: 'Individual',
    sourceUrl: 'https://github.com/singhabhishek98/ChatX/tree/main',
    liveUrl: 'https://chatx-oyba.onrender.com/login',
  },
  {
    title: 'Google Gemini Clone',
    image: geminiImage,
    alt: 'Google Gemini clone',
    description: "AI chatbot inspired by Google's Gemini for real-time interactions.",
    technologies: 'React.js, Vite, Google-Gemini Generative AI, Tailwind CSS, Node.js, VSCode, Git, API',
    type: 'Individual',
    sourceUrl: 'https://github.com/singhabhishek98/Gemini',
    liveUrl: 'https://gemix.netlify.app/',
  },
  {
    title: 'Generative AI (LinkedIn Post Generator)',
    image: linkedinGeneratorImage,
    alt: 'Generative AI LinkedIn Post Generator',
    description: 'A Generative AI-powered tool that creates personalized LinkedIn posts from user input.',
    technologies: 'Flask, Python, LangChain, Groq, HTML5, CSS3, JavaScript',
    type: 'Individual',
    sourceUrl: 'https://github.com/singhabhishek98/GenAi',
    liveUrl: 'https://generative-ai-f0gx.onrender.com/',
  },
  {
    title: 'Login Form using MERN',
    image: loginImage,
    alt: 'Login Form using MERN',
    description: 'A secure and responsive login authentication system built with the MERN stack.',
    technologies: 'MongoDB, Express.js, React, Node.js, Bootstrap',
    type: 'Individual',
    sourceUrl: 'https://github.com/singhabhishek98/Login-Auth-MERN',
    liveUrl: 'https://mernx.vercel.app/login',
  },
  {
    title: 'MentorConnect',
    image: mentorConnectImage,
    alt: 'MentorConnect platform',
    description: 'A platform connecting students with teachers for personalized guidance and support.',
    technologies: 'HTML, CSS, JavaScript, PHP, VS Code, Database',
    type: 'Group',
    sourceUrl: 'https://github.com/singhabhishek98/MentorConnect',
    liveUrl: 'https://app.netlify.com/teams/singhabhishek98/sites',
  },
  {
    title: 'Playit (YT clone)',
    image: playitImage,
    alt: 'Playit YouTube clone Android app',
    description: 'An Android app replicating core YouTube playback and search features.',
    technologies: 'Android, Java, Gradle, XML, Material Design',
    type: 'Individual',
    sourceUrl: 'https://github.com/singhabhishek98/Playit',
    liveUrl: 'https://drive.google.com/file/d/14ASIRqQKB8TLK9GqIzwsSpjrQrW8A5vQ/view',
    liveLabel: 'View app',
  },
  {
    title: 'LYRA',
    image: lyraImage,
    alt: 'LYRA AI assistant',
    description: 'An AI-powered tool that provides intelligent, real-time responses to user queries.',
    technologies: 'HTML, CSS, JavaScript, Web API, VSCode, GitHub',
    type: 'Individual',
    sourceUrl: 'https://github.com/singhabhishek98/LYRA-AI-assistant',
    liveUrl: 'https://lyra-assistant.netlify.app/',
  },
  {
    title: 'Weather Wise',
    image: weatherWiseImage,
    alt: 'Weather Wise application',
    description: 'Real-time weather updates with location-based search and a responsive interface.',
    technologies: 'HTML, CSS, JavaScript, Bootstrap, VSCode, Git, API',
    type: 'Individual',
    sourceUrl: 'https://github.com/singhabhishek98/WeatherWise.github.io',
    liveUrl: 'https://xtemp.netlify.app/',
  },
];
