import React from 'react';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import styled from 'styled-components';

const HeaderContainer = styled.header``;

const Header = ({ toggleTheme, setCursorHovered }) => {
  return (
    <HeaderContainer>
      <ThemeToggle
        toggleTheme={toggleTheme}
        setCursorHovered={setCursorHovered}
      />
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
