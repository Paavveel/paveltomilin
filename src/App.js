import React, { useState } from 'react';
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
  const [cursorHovered, setCursorHovered] = useState(false);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout
            cursorHovered={cursorHovered}
            setCursorHovered={setCursorHovered}
          />
        }
      >
        <Route index element={<Home setCursorHovered={setCursorHovered} />} />
        <Route path='about' element={<About />} />
        <Route path='work' element={<Work />} />
        <Route path='services' element={<Work />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
