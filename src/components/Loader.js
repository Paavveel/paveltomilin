import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const LoaderContainer = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Loading = styled(motion.div)`
  font-size: 4rem;
  z-index: 2;

  span {
    display: inline-block;
    margin: 0 5px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
  }
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

const loadingVariant = {
  animate: {
    scale: 0.8,
    opacity: 0,
    transition: {
      delay: 3,
      duration: 0.8,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};
const followVariant = {
  animate: {
    width: '100%',
    transition: {
      delay: 4,
      velocity: 10,
      damping: 15,
    },
  },
};

const spreadVariant = {
  animate: {
    height: '100%',
    transition: {
      delay: 4.7,
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
    <LoaderContainer animate='animate'>
      <Loading variants={loadingVariant}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </Loading>
      <LoaderProgress variants={progressVariant}></LoaderProgress>
      <LoaderFollow variants={followVariant}></LoaderFollow>
      <LoaderSpread
        variants={spreadVariant}
        onAnimationComplete={() => {
          setLoading(false);
        }}
      ></LoaderSpread>
    </LoaderContainer>
  );
};

export default Loader;
