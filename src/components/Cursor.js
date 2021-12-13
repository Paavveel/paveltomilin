import React from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';

function Cursor({ cursorHovered }) {
  const { x, y } = useMousePosition();
  return (
    <motion.div
      style={{
        left: `${x - 16}px`,
        top: `${y - 16}px`,
      }}
      className='cursor'
      animate={{
        scale: cursorHovered ? 1.2 : 1,
        opacity: cursorHovered ? 0.5 : 0,
      }}
      transition={{ ease: 'linear' }}
    ></motion.div>
  );
}

export default Cursor;
