import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyle, darkTheme, lightTheme } from './styles/GlobalStyles';

import './sass/main.scss';

// Components
import Loader from './components/Loader';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Works from './pages/works/Works';
import About from './pages/about/About';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

function App() {
  const [loading, setLoading] = useState(false);
  const [cursorHovered, setCursorHovered] = useState(false);
  const [theme, toggleTheme] = useDarkMode();
  const location = useLocation();

  if (loading) return <Loader setLoading={setLoading} />;

  return (
    <div className='App'>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='works' element={<Works />} />
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
