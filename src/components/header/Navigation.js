import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationItem from './NavigationItem';

const menuItems = [
  { id: 1, title: 'home' },
  { id: 2, title: 'works' },
  { id: 3, title: 'about me' },
  { id: 4, title: 'contacts' },
];

const navVariants = {
  initial: { width: 0 },
  animate: {
    width: 'auto',
  },
  exit: {
    width: 0,
    opacity: 0,
  },
};

function Navigation({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          className='header__nav-list-item'
          variants={navVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          {menuItems.map((item) => (
            <NavigationItem key={item.id} {...item} />
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

export default Navigation;
