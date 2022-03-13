import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { GlobalStyle, darkTheme, lightTheme } from '../styles/GlobalStyles';
import Header from '../components/header/Header';
import Loader from '../components/Loader';
import Cursor from '../components/Cursor';
import Container from '../components/Container';
import styled from 'styled-components';
import { useDarkMode } from '../hooks/useDarkMode';

const Main = styled.main`
  position: relative;
  overflow: hidden;
`;

function Layout({ cursorHovered, setCursorHovered }) {
  const [loading, setLoading] = useState(false);
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AnimatePresence>
        {loading ? (
          <Loader key='loader' setLoading={setLoading} />
        ) : (
          <>
            <Header
              toggleTheme={toggleTheme}
              setCursorHovered={setCursorHovered}
            />
            <Main>
              <Container>
                <Outlet />
              </Container>
            </Main>
          </>
        )}
      </AnimatePresence>
      <Cursor cursorHovered={cursorHovered} />
    </ThemeProvider>
  );
}

export default Layout;