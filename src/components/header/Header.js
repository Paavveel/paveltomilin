import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: relative;
`;

const Header = ({ setCursorHovered }) => {
  return (
    <HeaderContainer
      onMouseEnter={() => setCursorHovered(true)}
      onMouseLeave={() => setCursorHovered(false)}
    >
      <ThemeToggle />
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
