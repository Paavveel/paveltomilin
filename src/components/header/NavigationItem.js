import React from 'react';
import { motion } from 'framer-motion';

function NavigationItem({ title }) {
  return (
    <motion.li>
      <a href={`/${title}`}>{title}</a>
    </motion.li>
  );
}

export default NavigationItem;
