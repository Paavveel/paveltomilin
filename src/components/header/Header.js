import React from 'react';
import { motion, useCycle } from 'framer-motion';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';

const Header = ({ setCursorHovered }) => {
  const [isOpen, toggleOpen] = useCycle(true, false);

  return (
    <motion.div
      className='header'
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
      onAnimationComplete={toggleOpen}
    >
      <div className='header__inner'>
        <motion.nav
          className='header__nav'
          animate={isOpen ? 'open' : 'closed'}
          onMouseEnter={() => setCursorHovered(true)}
          onMouseLeave={() => setCursorHovered(false)}
        >
          <ThemeToggle />
          <Navigation isOpen={isOpen} />
          <MenuToggle toggle={toggleOpen} />
        </motion.nav>
      </div>
    </motion.div>
  );
};

export default Header;
