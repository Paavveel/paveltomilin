// Serts
import html1 from '../src/assets/serts/html1.jpg';
import html2 from '../src/assets/serts/html2.jpg';
import html3 from '../src/assets/serts/html3.jpg';
import html4 from '../src/assets/serts/html4.jpg';

// Works Img

import todo1 from '../src/assets/works/todo1.jpg';
import todo2 from '../src/assets/works/todo2.jpg';
import form1 from '../src/assets/works/form1.jpg';
import form2 from '../src/assets/works/form2.jpg';
import food1 from '../src/assets/works/food1.jpg';
import food2 from '../src/assets/works/food2.jpg';
import fortnite1 from '../src/assets/works/fortnite1.jpg';
import fortnite2 from '../src/assets/works/fortnite2.jpg';
import movie1 from '../src/assets/works/movie1.jpg';
import movie2 from '../src/assets/works/movie2.jpg';
import timer1 from '../src/assets/works/timer1.jpg';
import timer2 from '../src/assets/works/timer2.jpg';
import mishka1 from '../src/assets/works/mishka1.jpg';
import mishka2 from '../src/assets/works/mishka2.jpg';
import sedona1 from '../src/assets/works/sedona1.jpg';
import sedona2 from '../src/assets/works/sedona2.jpg';

export const works = [
  {
    id: '01',
    name: 'Todo App',
    date: '29.04.22',
    description:
      'I have build Todo App in order to get better with React and Redux and practise CRUD operations. You can add tasks, delete and edit. Each task can be edited using a pop-up modal window. Tasks can be filtered based on status using a selector. I have also implemented local storage for this project.',
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
    id: '02',
    name: 'Ultimate Form',
    date: '01.03.22',
    description:
      'Ultimate form containing all the most basic and common forms with validation. Using Redux to save form fields and React Router to move between forms. On the result page, you can view all the completed data and submit the form, or go back and correct the necessary fields.',
    tech: [
      'React.js',
      'Redux Toolkit',
      'React Router',
      'React Hook Form',
      'Yup',
      'JavaScript (ES6)',
      'HTML5/CSS',
      'Material UI',
    ],
    linkRepo: 'https://github.com/Paavveel/ultimate-react-hook-form',
    linkDemo: 'https://paavveel.github.io/ultimate-react-hook-form/',
    firstImg: form1,
    secondImg: form2,
  },
  {
    id: '03',
    name: 'Food App',
    date: '15.01.22',
    description:
      'SPA recipe search application using TheMealDB API. Categories with their descriptions are available on the main page, so there is a search bar for categories, you can go inside the category and see the available dishes, you can also get to the page with the recipe itself.',
    tech: [
      'React.js',
      'React Router',
      'JavaScript (ES6)',
      'HTML5/CSS',
      'Materialize',
      'TheMealDB API',
    ],
    linkRepo: 'https://github.com/Paavveel/react-food-project',
    linkDemo: 'https://paavveel.github.io/react-food-project/',
    firstImg: food1,
    secondImg: food2,
  },
  {
    id: '04',
    name: 'Fortine Shop',
    date: '15.12.21',
    description:
      'Fortnite item store using the Fortnite API. Items in the store are updated daily. When you click the buy button, an item is added to the basket, you can delete, increase and decrease the number of items in the basket.',
    tech: [
      'React.js',
      'Redux',
      'JavaScript (ES6)',
      'HTML5/CSS',
      'Materialize',
      'Fortnite API',
    ],
    linkRepo: 'https://github.com/Paavveel/react-shop-project',
    linkDemo: 'https://paavveel.github.io/react-shop-project/',
    firstImg: fortnite1,
    secondImg: fortnite2,
  },
  {
    id: '05',
    name: 'Movie',
    date: '06.12.21',
    description:
      'An application for searching movies and series using the MovieDB API. This is my first project using the API. Functionality: search can be done using the search bar. The search can be filtered by movies, series and all.',
    tech: [
      'React.js',
      'JavaScript (ES6)',
      'HTML5/CSS',
      'Materialize',
      'MovieDB API',
    ],
    linkRepo: 'https://github.com/Paavveel/React-movies',
    linkDemo: 'https://paavveel.github.io/React-movies/',
    firstImg: movie1,
    secondImg: movie2,
  },
  {
    id: '06',
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
    id: '07',
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
    id: '08',
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
