import cssIcon from '../assets/icons/skills/css.svg';
import expressIcon from '../assets/icons/skills/icons8-express-js.svg';
import htmlIcon from '../assets/icons/skills/html.svg';
import javaIcon from '../assets/icons/skills/java.svg';
import javascriptIcon from '../assets/icons/skills/javascript.svg';
import mongodbIcon from '../assets/icons/skills/mongodb-icon.svg';
import nodeIcon from '../assets/icons/skills/node-js-icon.svg';
import reactIcon from '../assets/icons/skills/react-js-icon.svg';

export const skills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'React JS', icon: reactIcon },
  {
    name: 'Redux',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
  },
  { name: 'MongoDB', icon: mongodbIcon, iconClassName: 'skill-icon--indented' },
  { name: 'Node JS', icon: nodeIcon },
  { name: 'Express JS', icon: expressIcon },
  { name: 'Java', icon: javaIcon },
  {
    name: 'Git',
    icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  },
];
