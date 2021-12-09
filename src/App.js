import { Routes, Route } from 'react-router-dom';

import './sass/main.scss';

// Components
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='work' element={<Work />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
