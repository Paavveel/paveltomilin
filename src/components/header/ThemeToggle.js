import React from 'react';
import { motion } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';
import styled from 'styled-components';
import { AiFillThunderbolt } from 'react-icons/ai';

const ThemeButton = styled(motion.button)`
  position: fixed;
  display: flex;
  padding: 0.2rem;
  right: 2rem;
  top: 2rem;
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 999;
  font-size: 2.3rem;
  color: ${props => props.theme.text};

  @media ${media.small} {
    font-size: 2rem;
  }
`;

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <ThemeButton
      onClick={toggleTheme}
      initial={{ opacity: 0, x: 180 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          ease: 'easeInOut',
          duration: 1,
          delay: 2,
        },
      }}
      whileHover={{
        scale: 1.1,
        rotate: 360,
        transition: {
          type: 'spring',
          damping: 12,
          ease: 'easeInOut',
        },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <AiFillThunderbolt />
    </ThemeButton>
  );
};

export default ThemeToggle;
