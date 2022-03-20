import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './sass/main.scss';

// Components
import Header from './components/header/Header';
import Works from './pages/Works';
import About from './pages/About';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyle, darkTheme, lightTheme } from './styles/GlobalStyles';

function App() {
  const [cursorHovered, setCursorHovered] = useState(false);
  const [theme, toggleTheme] = useDarkMode();
  const location = useLocation();

  return (
    <div className='App'>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='work' element={<Works />} />
              <Route path='about' element={<About />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
