import React from 'react';
import { motion } from 'framer-motion';

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function NavigationItem({ title }) {
  return (
    <motion.li variants={liVariants}>
      <a href={`/${title}`}>{title}</a>
    </motion.li>
  );
}

export default NavigationItem;
