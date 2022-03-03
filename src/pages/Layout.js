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

const Main = styled.main``;

function Layout({ cursorHovered, setCursorHovered }) {
  const [loading, setLoading] = useState(true);
  const { currentTheme } = useSelector(state => state.global);

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AnimatePresence>
        {loading ? (
          <Loader key='loader' setLoading={setLoading} />
        ) : (
          <>
            <Header setCursorHovered={setCursorHovered} />
            <Main>
              <Outlet />
            </Main>
          </>
        )}
      </AnimatePresence>
      <Cursor cursorHovered={cursorHovered} />
    </ThemeProvider>
  );
}

export default Layout;
