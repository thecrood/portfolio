import {
  frontend,
  backend,
  af,
  prototyping,
  javascript,
  python,
  html,
  css,
  reactjs,
  jquery,
  tailwind,
  git,
  c,
  twodcar,
  twodshoot,
  portfolio,
  ipl,
  intern,
  fullstack,
  develop,
  soft,
  database,
  aws,
  ai,
  azure,
  mongo,
  prosper
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Artificial Intelligence',
    icon: af,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Artificial intelligence',
    icon: ai,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'JQuery',
    icon: jquery,
  },
  {
    name: 'MySQl',
    icon: database,
  },
  {
    name: 'Mongo DB',
    icon: mongo,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'Azure',
    icon: azure,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'C/C++',
    icon: c,
  },  
  {
    name: 'React JS',
    icon: reactjs,
  },
];

const experiences = [
  {
    title: 'Data Engineer',
    company_name: 'Itronix Solutions',
    icon: intern,
    iconBg: '#333333',
    date: 'Jan 2019 - Dec 2019',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Webner Solutions',
    icon: soft,
    iconBg: '#333333',
    date: 'Jan 2022 - Feb 2023',
  },
  {
    title: 'Software Engineer',
    company_name: 'Webner Solutions',
    icon: develop,
    iconBg: '#333333',
    date: 'FEB 2023 - Nov 2023',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Webner Solutions',
    icon: fullstack,
    iconBg: '#333333',
    date: 'Nov 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'ProsperWise',
    description: `Stock Market Simulator`,
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Django',
        color: 'green-text-gradient',
      },
      {
        name: 'HTML5',
        color: 'pink-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: prosper,
    repo: 'https://github.com/thecrood/ProsperWise',
    demo: 'https://youtu.be/nq9IH7uJVOE',
  },
  {
    id: 'project-4',
    name: 'portfolio',
    description: 'Portfolio Web App For Software Developer.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'vite',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    repo: 'https://github.com/thecrood/portfolio',
    demo: 'https://rohit-workfolio.netlify.app/',
  },
  {
    id: 'project-2',
    name: '2D Car Game',
    description: '2D Car Game Using Ursina Game Engine, Ursina is a Python Based Game Engine.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'ursina',
        color: 'green-text-gradient',
      },
    ],
    image: twodcar,
    repo: 'https://github.com/thecrood/2D-Car-Game-Using-Ursina-Game-Engine',
    demo: '#',
  },
  {
    id: 'project-3',
    name: '2D shooting Game',
    description:
      '2D shooting Game Using Ursina Game Engine, Ursina is a Python Based Game Engine.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Ursina',
        color: 'green-text-gradient',
      },,
    ],
    image: twodshoot,
    repo: 'https://github.com/thecrood/2D-shooting-Game-Using-Ursina-Game-Engine',
    demo: '#',
  },
  {
    id: 'project-5',
    name: 'EDA of IPL Data',
    description: `Exploratory-Data-Analysis-of-IPL-Matches-9years`,
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Data Analysis',
        color: 'green-text-gradient',
      },
      {
        name: 'Pandas',
        color: 'pink-text-gradient',
      },
      {
        name: 'Seaborn',
        color: 'pink-text-gradient',
      },
    ],
    image: ipl,
    repo: 'https://github.com/thecrood/Exploratory-Data-Analysis-of-IPL-Matches-9years',
    demo: '#',
  },
];

export { services, technologies, experiences, projects };
