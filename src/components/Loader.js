import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LoaderContainer = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const LoaderFollow = styled(motion.div)`
  position: absolute;
  background: linear-gradient(230deg, #ba39f7, #4992f8, #64c0d3);
  height: 2px;
  left: 0;
  z-index: 3;
`;
const LoaderSpread = styled(motion.div)`
  position: absolute;
  background: linear-gradient(230deg, #ba39f7, #4992f8, #64c0d3);
  width: 100%;
  left: 0;
  z-index: 3;
`;
const LoaderProgress = styled(motion.div)`
  position: absolute;
  left: 0;
  background-color: rgba(255, 255, 255, 0.575);
  height: 2px;
  z-index: 1;
`;

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
      duration: 0.7,
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

const Loader = ({ setLoading }) => {
  return (
    <LoaderContainer>
      <div class='loading-text'>
        <span class='loading-text-words'>L</span>
        <span class='loading-text-words'>O</span>
        <span class='loading-text-words'>A</span>
        <span class='loading-text-words'>D</span>
        <span class='loading-text-words'>I</span>
        <span class='loading-text-words'>N</span>
        <span class='loading-text-words'>G</span>
      </div>
      <LoaderProgress
        variants={progressVariant}
        animate='animate'
      ></LoaderProgress>
      <LoaderFollow variants={followVariant} animate='animate'></LoaderFollow>
      <LoaderSpread
        variants={spreadVariant}
        animate='animate'
        onAnimationComplete={() => {
          setLoading(false);
        }}
      ></LoaderSpread>
    </LoaderContainer>
  );
};

export default Loader;
