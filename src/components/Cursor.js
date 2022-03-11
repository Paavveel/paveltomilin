import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import styled from 'styled-components';
import { color } from '../styles/GlobalStyles';

const StyledCursor = styled(motion.div)`
  position: absolute;
  height: 32px;
  width: 32px;
  top: 0;
  left: 0;
  background: ${color.peachpuff};
  border-radius: 100%;
  pointer-events: none;
  z-index: 999;
  opacity: 0;
`;

function Cursor({ cursorHovered }) {
  const { x, y } = useMousePosition();
  return (
    <StyledCursor
      style={{
        left: `${x - 16}px`,
        top: `${y - 16}px`,
      }}
      animate={{
        scale: cursorHovered ? 1.2 : 1,
        opacity: cursorHovered ? 0.7 : 0,
      }}
      transition={{ ease: 'linear' }}
    ></StyledCursor>
  );
}

export default Cursor;
