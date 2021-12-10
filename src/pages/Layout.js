import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from '../components/header/Header';
import Loader from '../components/Loader';
import Cursor from '../components/Cursor';
import { useGlobalStateContext } from '../context/globalContext';

const GlobalStyle = createGlobalStyle`


body {
  background: ${(props) => props.theme.background};
  overflow-x: hidden;
  color: #121212;
}
`;

function Layout({ cursorHovered, setCursorHovered }) {
  const [loading, setLoading] = useState(false);

  const darkTheme = {
    background: '#000',
    text: '#fff',
  };

  const lightTheme = {
    background: '#fff',
    text: '#000',
  };

  const { currentTheme } = useGlobalStateContext();

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AnimatePresence>
        {loading ? (
          <motion.div
            key='loader'
            exit={{
              x: '100vw',
              transition: {
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.9],
              },
            }}
          >
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header setCursorHovered={setCursorHovered} />
            <Outlet />
          </>
        )}
      </AnimatePresence>
      <Cursor cursorHovered={cursorHovered} />
    </ThemeProvider>
  );
}

export default Layout;
