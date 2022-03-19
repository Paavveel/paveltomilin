import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { media } from '../styles/GlobalStyles';

const StyledSection = styled(motion.section)`
  width: 100vw;
  min-height: 100vh;
  position: relative;
`;

const StyledSquare = styled(motion.div)`
  position: absolute;
  background: linear-gradient(230deg, #ba39f7, #4992f8, #64c0d3);
  transform-style: preserve-3d;
  z-index: 100;
`;
const squareVariants = {
  initial: { width: '100%', height: '100%', left: 0, top: 0 },
  enter: {
    width: '55%',
    height: '52%',
    left: '26%',
    top: '21%',
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.5,
    },
  },
  exit: {
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.5,
    },
  },
};
const squareExitVariants = {
  initial: { width: '100%', height: 0, bottom: 0 },
  exit: {
    height: '100%',
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.5,
    },
  },
};

function Works() {
  return (
    <>
      <StyledSection>
        <h2>Hello from Works</h2>
        <StyledSquare
          variants={squareVariants}
          initial='initial'
          animate='enter'
          exit='exit'
        ></StyledSquare>
      </StyledSection>
    </>
  );
}

export default Works;
