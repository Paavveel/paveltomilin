import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationItem from './NavigationItem';

const menuItems = [
  { id: 1, title: 'home', emoji: '📍' },
  { id: 2, title: 'work', emoji: '💻' },
  { id: 3, title: 'about', emoji: '🙋🏽‍♂️' },
  { id: 4, title: 'contact', emoji: '📩' },
];

const navVariants = {
  initial: { width: 0 },
  animate: {
    width: 'auto',
  },
  exit: {
    width: 0,
    opacity: 0,
    transition: {
      delay: 0.2,
      ease: 'easeInOut',
    },
  },
};

function Navigation({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          key='navigation'
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
