import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeIcon } from '../../assets/svg/icons';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../store/globalSlice';

function ThemeToggle() {
  const { currentTheme } = useSelector(state => state.global);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (currentTheme === 'light') {
      dispatch(changeTheme('dark'));
    } else {
      dispatch(changeTheme('light'));
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
