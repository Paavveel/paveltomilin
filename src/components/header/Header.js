import React from 'react';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import styled from 'styled-components';

const HeaderContainer = styled.header``;

const Header = ({ toggleTheme, setCursorHovered }) => {
  return (
    <HeaderContainer
      onMouseEnter={() => setCursorHovered(true)}
      onMouseLeave={() => setCursorHovered(false)}
    >
      <ThemeToggle toggleTheme={toggleTheme} />
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
