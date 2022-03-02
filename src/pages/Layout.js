import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import Header from '../components/header/Header';
import Loader from '../components/Loader';
import Cursor from '../components/Cursor';
import { useSelector } from 'react-redux';
import GlobalStyle from '../styles/GlobalStyles';
import { darkTheme, lightTheme } from '../styles/themes';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

function Layout({ cursorHovered, setCursorHovered }) {
  const [loading, setLoading] = useState(true);
  const { currentTheme } = useSelector(state => state.global);

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
            <Container>
              <Outlet />
            </Container>
          </>
        )}
      </AnimatePresence>
      <Cursor cursorHovered={cursorHovered} />
    </ThemeProvider>
  );
}

export default Layout;
