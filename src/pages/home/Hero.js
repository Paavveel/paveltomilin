import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';
import Tilt from 'react-parallax-tilt';
import keyboard from '../../assets/keyboard.mp4';
import { toggleNoScroll } from '../../utils/utils';

// Conponents
import Social from '../../components/Social';

const StyledTilt = styled(Tilt)`
  height: 100vh;
  width: 100vw;
  transform-style: preserve-3d;

  @media ${media.small} {
    transform: none !important;
  }
`;

const StyledSquare = styled(motion.div)`
  position: absolute;
  background: linear-gradient(230deg, #ba39f7, #4992f8, #64c0d3);
  transform-style: preserve-3d;
  z-index: 100;
`;

const StyledName = styled(motion.h1)`
  position: absolute;
  left: -20%;
  top: 25%;
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: linear-gradient(85deg, #ba39f7, #4992f8, #64c0d3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translateZ(100px);

  @media ${media.medium} {
    font-size: 4rem;
  }
  @media ${media.small} {
    left: -20%;
    top: -20%;
    font-size: 3.5rem;
  }
  @media ${media.xsmall} {
    font-size: 2.5rem;
  }
`;

const StyledSpan = styled(motion.span)`
  position: absolute;
  bottom: -20%;
  left: -10%;
  font-weight: 800;
  line-height: 0.9;
  font-size: 3.5rem;
  transform: translateZ(50px);

  @media ${media.medium} {
    font-size: 3rem;
  }
  @media ${media.small} {
    font-size: 2.5rem;
    left: unset;
    bottom: -18%;
    right: 0;
  }
  @media ${media.xsmall} {
    font-size: 2rem;
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
    left: '30%',
    top: '21%',

    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.2,
      delay: 0.7,
    },
  },
};

const nameVariants = {
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
const spanVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 2.4,
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
        perspective={800}
      >
        <StyledSquare
          variants={squareVariants}
          initial='initial'
          animate='enter'
          onAnimationStart={toggleNoScroll}
          onAnimationComplete={() => {
            setPlayTilt(true);
            controls.start('enter');
          }}
        >
          <StyledName
            variants={nameVariants}
            initial='initial'
            animate='enter'
            exit='exit'
          >
            Pavel <br />
            Tomilin
          </StyledName>
          <StyledSpan
            variants={spanVariants}
            initial='initial'
            animate='enter'
            exit='exit'
          >
            frontend <br />
            developer
          </StyledSpan>

          <StyledVideo
            preload='metadata'
            autoPlay
            loop
            muted='muted'
            playsinline='playsinline'
            variants={videoVariats}
            initial='initial'
            animate={controls}
            onAnimationComplete={toggleNoScroll}
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
