import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';
import Social from '../../components/Social';
import Tilt from 'react-parallax-tilt';
import keyboard from '../../assets/keyboard.mp4';
import { toggleNoScroll } from '../../utils/utils';

const StyledTilt = styled(Tilt)`
  height: 100vh;
  width: 100vw;
  transform-style: preserve-3d;
`;

const StyledSquare = styled(motion.div)`
  position: absolute;
  background: linear-gradient(230deg, #ba39f7, #4992f8, #64c0d3);
  transform-style: preserve-3d;
  z-index: 100;
`;

const StyledTitle = styled(motion.h1)`
  position: absolute;
  left: -12%;
  top: 25%;
  display: flex;
  flex-direction: column;
  font-weight: 800;
  line-height: 0.9;
  text-transform: uppercase;
  transform: translateZ(100px);
`;

const StyledName = styled.span`
  font-size: 4.5rem;
  letter-spacing: 3px;

  @media ${media.medium} {
    font-size: 4rem;
  }
  @media ${media.small} {
    font-size: 3.5rem;
  }
  @media ${media.xsmall} {
    font-size: 2.5rem;
  }
`;

const StyledSpan = styled.span`
  font-size: 3rem;

  @media ${media.medium} {
    font-size: 2.5rem;
  }
  @media ${media.small} {
    font-size: 2rem;
  }
  @media ${media.xsmall} {
    font-size: 1.5rem;
  }
`;
const StyledVideo = styled(motion.video)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.003);
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
      duration: 1.2,
      delay: 0.7,
    },
  },
};

const titleVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 0.5 },
  },
};
const videoVariats = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
};

const Hero = () => {
  const [playTilt, setPlayTilt] = useState(false);
  const controls = useAnimation();

  return (
    <>
      <StyledTilt
        tiltEnable={playTilt}
        trackOnWindow
        tiltReverse
        tiltMaxAngleX={7}
        tiltMaxAngleY={7}
        perspective={700}
      >
        <StyledSquare
          variants={squareVariants}
          initial='initial'
          animate='enter'
          onAnimationStart={toggleNoScroll}
          onAnimationComplete={() => {
            setPlayTilt(true);
            controls.start('enter');
            toggleNoScroll();
          }}
        >
          <StyledTitle
            variants={titleVariants}
            initial='initial'
            animate='enter'
            exit='exit'
          >
            <StyledName>Pavel</StyledName>
            <StyledName>Tomilin</StyledName>
            <StyledSpan>frontend</StyledSpan>
            <StyledSpan>developer</StyledSpan>
          </StyledTitle>
          <StyledVideo
            autoPlay
            loop
            muted
            variants={videoVariats}
            initial='initial'
            animate={controls}
          >
            <source src={keyboard} type='video/mp4' />
          </StyledVideo>
        </StyledSquare>
      </StyledTilt>

      <Social />
    </>
  );
};

export default Hero;
