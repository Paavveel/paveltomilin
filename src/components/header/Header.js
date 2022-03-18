import React from 'react';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import styled from 'styled-components';

const HeaderContainer = styled.header``;

const Header = ({ toggleTheme }) => {
  return (
    <HeaderContainer>
      <Navigation />
      <ThemeToggle toggleTheme={toggleTheme} />
    </HeaderContainer>
  );
};

export default Header;
