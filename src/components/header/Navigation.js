import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';
import { NavLink } from 'react-router-dom';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 2.4rem;
  right: 6.4rem;
  display: flex;
  gap: 2rem;
  z-index: 999;
  font-size: 0.9rem;

  @media ${media.small} {
    font-size: 0.8rem;
  }
`;
const StyledNavLink = styled(motion(NavLink))`
  color: var(--gray);
  text-transform: uppercase;

  &.active {
    color: ${props => props.theme.text};
  }
`;

function Navigation() {
  return (
    <Nav
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 2,
      }}
    >
      <StyledNavLink
        to='/'
        whileHover={{
          scale: 1.1,
        }}
      >
        Home
      </StyledNavLink>
      <StyledNavLink
        to='works'
        whileHover={{
          scale: 1.1,
        }}
      >
        Works
      </StyledNavLink>
      <StyledNavLink
        to='about'
        whileHover={{
          scale: 1.1,
        }}
      >
        About me
      </StyledNavLink>
    </Nav>
  );
}

export default Navigation;
