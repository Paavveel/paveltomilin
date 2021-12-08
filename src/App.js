import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './sass/main.scss';

// Components
import Header from './components/header/Header';
import Banner from './components/Banner';
import Loader from './components/Loader';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Banner />} />
        <Route path='work' element={<Work />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
