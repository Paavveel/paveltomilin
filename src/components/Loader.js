import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { color } from '../styles/GlobalStyles';

const followVariant = {
  animate: {
    width: '100%',
    transition: {
      delay: 3.2,
      velocity: 10,
      damping: 15,
    },
  },
};

const spreadVariant = {
  animate: {
    height: '100%',
    transition: {
      delay: 3.9,
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.9],
    },
  },
};
const progressVariant = {
  animate: {
    width: '100%',
    transition: {
      duration: 3,
      ease: 'easeInOut',
    },
  },
};

const LoaderContainer = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background-color: ${color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const LoaderFollow = styled(motion.div)`
  position: absolute;
  background-color: ${color.peachpuff};
  height: 2px;
  left: 0;
  z-index: 2;
`;
const LoaderSpread = styled(motion.div)`
  position: absolute;
  background-color: ${color.peachpuff};
  width: 100%;
  left: 0;
  z-index: 2;
`;
const LoaderProgress = styled(motion.div)`
  position: absolute;
  left: 0;
  background-color: rgba(255, 255, 255, 0.575);
  height: 2px;
`;

const Loader = ({ setLoading }) => {
  return (
    <LoaderContainer
      exit={{
        x: '100vw',
        transition: {
          duration: 0.5,
          ease: [0.6, -0.05, 0.01, 0.9],
        },
      }}
    >
      <LoaderFollow variants={followVariant} animate='animate'></LoaderFollow>
      <LoaderSpread
        variants={spreadVariant}
        animate='animate'
        onAnimationComplete={() => {
          setLoading(false);
        }}
      ></LoaderSpread>
      <LoaderProgress
        variants={progressVariant}
        animate='animate'
      ></LoaderProgress>
    </LoaderContainer>
  );
};

export default Loader;
