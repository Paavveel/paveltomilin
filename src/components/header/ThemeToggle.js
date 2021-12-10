import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeIcon } from '../../assets/svg/icons';
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from '../../context/globalContext';

function ThemeToggle() {
  const { currentTheme } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const toggleTheme = () => {
    if (currentTheme === 'light') {
      dispatch({ type: 'TOGGLE_THEME', theme: 'dark' });
    } else {
      dispatch({ type: 'TOGGLE_THEME', theme: 'light' });
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  return (
    <motion.button
      className='header__theme-toggle'
      onClick={toggleTheme}
      whileHover={{
        rotate: 360,
      }}
      transition={{
        type: 'spring',
        stiffness: 83,
        damping: 12,
        ease: 'easeInOut',
        delay: 0.15,
      }}
    >
      <ThemeIcon />
    </motion.button>
  );
}

export default ThemeToggle;
