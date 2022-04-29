// Serts
import html1 from '../src/assets/serts/html1.jpg';
import html2 from '../src/assets/serts/html2.jpg';
import html3 from '../src/assets/serts/html3.jpg';
import html4 from '../src/assets/serts/html4.jpg';

// Works Img

import work21 from '../src/assets/works/1.png';
import work22 from '../src/assets/works/2.png';
import todo1 from '../src/assets/works/todo1.jpg';
import todo2 from '../src/assets/works/todo2.jpg';
import timer1 from '../src/assets/works/timer1.jpg';
import timer2 from '../src/assets/works/timer2.jpg';
import mishka1 from '../src/assets/works/mishka1.jpg';
import mishka2 from '../src/assets/works/mishka2.jpg';
import sedona1 from '../src/assets/works/sedona1.jpg';
import sedona2 from '../src/assets/works/sedona2.jpg';

export const works = [
  {
    id: '01',
    name: 'Name1',
    date: '01.01.22',
    description:
      'An individual effort creating a social travel app consuming TFLs public API and allows users to plan journeys as well as check for live travel updates. The app will include a social feature where users can post pictures and statuses mimicking a social media platform.',
    tech: [
      'React.js',
      'JavaScript (ES6)',
      'HTML5/SASS',
      'Axios',
      'JSON',
      'React.js',
      'JavaScript (ES6)',
      'HTML5/SASS',
      'Axios',
      'JSON',
      'JSON',
    ],
    linkRepo: '#',
    linkDemo: '#',
    firstImg: work21,
    secondImg: work22,
  },
  {
    id: '02',
    name: 'Todo App',
    date: '29.04.22',
    description:
      'I have build Todo App in order to get better with React and Redux and practise CRUD operations.You can add tasks, delete and edit. Each task can be edited using a pop-up modal window. Tasks can be filtered based on status using a selector. I have also implemented local storage for this project.',
    tech: [
      'React.js',
      'Redux Toolkit',
      'JavaScript (ES6)',
      'HTML5/SASS',
      'Framer Motion',
    ],
    linkRepo: 'https://github.com/Paavveel/todo-app-redux-toolkit',
    linkDemo: 'https://paavveel.github.io/todo-app-redux-toolkit/',
    firstImg: todo1,
    secondImg: todo2,
  },
  {
    id: '03',
    name: 'Timer',
    date: '30.11.21',
    description:
      'Allows you to start the countdown, stop, continue and reset the timer. When the page is reloaded, the previous timer value is stored in local storage.',
    tech: ['React.js', 'JavaScript (ES6)', 'HTML5/CSS', 'Materialize'],
    linkRepo: 'https://github.com/Paavveel/react-timer-on-hooks',
    linkDemo: 'https://paavveel.github.io/react-timer-on-hooks/',
    firstImg: timer1,
    secondImg: timer2,
  },
  {
    id: '04',
    name: 'Mishka',
    date: '30.08.20',
    description:
      'My second study project. A small site for a soft toy store. Responsive for desktop, tablet and mobile. Made semantically and with a11y. Has a homepage, a catalog page and an order page.',
    tech: [
      'HTML5/SASS',
      'JavaScript (ES6)',
      'Gulp',
      'Retina pictures',
      'SVG Sprites',
      'Form validation',
      'Pixel perfect',
    ],
    linkRepo: 'https://github.com/Paavveel/Mishka',
    linkDemo: 'https://paveltomilin-mishka.netlify.app',
    firstImg: mishka1,
    secondImg: mishka2,
  },
  {
    id: '05',
    name: 'Sedona',
    date: '07.07.20',
    description:
      'My first study project using HTML/CSS and some JavaScript. A small site about the city of Sedona. Not adaptive, but done semantically and with a11y. It has a main page and a hotel booking page.',
    tech: ['HTML5/CSS', 'Pixel perfect', 'JavaScript (ES6)'],
    linkRepo: 'https://github.com/Paavveel/Sedona',
    linkDemo: 'https://paveltomilin-sedona.netlify.app',
    firstImg: sedona1,
    secondImg: sedona2,
  },
];

export const achievements = [
  {
    id: '1',
    title: 'HTML Academy - HTML & CSS. Professional Website Coding',
    date: 'July 2020',
    imgUrl: html1,
  },
  {
    id: '2',
    title: 'HTML Academy - HTML & CSS. Adeptive Website Coding and Automation',
    date: 'Sept 2020',
    imgUrl: html2,
  },
  {
    id: '3',
    title:
      'HTML Academy - JavaScript. Professional Development of Web Interfaces',
    date: 'Nov 2020',
    imgUrl: html3,
  },
  {
    id: '4',
    title: 'HTML Academy - Profession Front-end Developer',
    date: 'Nov 2020',
    imgUrl: html4,
  },
];

export const socials = [
  { name: 'phone', href: 'tel:+79169179195' },
  { name: 'mail', href: 'mailto:pa.tomilin@gmail.com' },
  { name: 'telegram', href: 'https://t.me/paul_tm' },
  { name: 'github', href: 'https://github.com/Paavveel' },
  { name: 'linkedin', href: '#' },
  { name: 'cv', href: '#' },
];
