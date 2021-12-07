import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationItem from './NavigationItem';

const menuItems = [
  { id: 1, title: 'home' },
  { id: 2, title: 'works' },
  { id: 3, title: 'about me' },
  { id: 4, title: 'contacts' },
];

const ulVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 10,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },

  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

function Navigation() {
  return (
    <motion.ul
      key='navigation'
      className='header__nav-list-item'
      variants={ulVariants}
      initial={{ x: '100vw', opacity: 0 }}
    >
      {menuItems.map((item) => (
        <NavigationItem key={item.id} {...item} />
      ))}
    </motion.ul>
  );
}

export default Navigation;
