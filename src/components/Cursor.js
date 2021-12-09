import React from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';

function Cursor({ cursorHovered }) {
  const { x, y } = useMousePosition();
  return (
    <motion.div
      style={{ left: `${x - 18}px`, top: `${y - 18}px` }}
      className='cursor'
      animate={{
        // x: x - 18,
        // y: y - 18,
        scale: cursorHovered ? 1.2 : 1,
        opacity: cursorHovered ? 0.5 : 0,
      }}
      transition={{ ease: 'linear' }}
    ></motion.div>
  );
}

export default Cursor;
