import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function NavigationItem({ title, emoji }) {
  return (
    <motion.li>
      <Link to={`${title}`}>
        <span>{emoji}</span>
        <span>{title}</span>
      </Link>
    </motion.li>
  );
}

export default NavigationItem;
