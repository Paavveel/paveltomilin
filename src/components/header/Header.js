import React from 'react';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import styled from 'styled-components';

const HeaderContainer = styled.header``;

const Header = ({ toggleTheme }) => {
  return (
    <HeaderContainer>
      <ThemeToggle toggleTheme={toggleTheme} />
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
