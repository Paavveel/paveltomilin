import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ThemeIcon } from '../../assets/svg/icons';
import { AiFillThunderbolt } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const ThemeButton = styled(motion.button)`
  position: absolute;
  right: 2rem;
  top: 2rem;
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 9999;
`;
const Thunderbolt = styled(AiFillThunderbolt)`
  color: ${props => props.theme.text};
`;

function ThemeToggle({ toggleTheme }) {
  return (
    <ThemeButton
      onClick={toggleTheme}
      initial={{ opacity: 0, y: -180 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          ease: 'easeInOut',
          duration: 1,
          delay: 0.6,
        },
      }}
      whileHover={{
        rotate: 360,
        transition: {
          type: 'spring',
          damping: 12,
          ease: 'easeInOut',
        },
      }}
    >
      <IconContext.Provider value={{ size: '35px' }}>
        <Thunderbolt />
      </IconContext.Provider>
    </ThemeButton>
  );
}

export default ThemeToggle;
