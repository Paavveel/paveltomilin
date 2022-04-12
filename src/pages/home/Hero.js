import React, { useRef, useState } from 'react';
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

  @media ${media.small} {
    transform: none !important;
  }

  .level--2 {
    position: absolute;
    left: 24%;
    top: 29%;
    width: 55%;
    height: 52%;
    z-index: 50;
    opacity: 0.7;
    transform: translateZ(-100px);
  }
  .level--1 {
    position: absolute;
    left: 27%;
    top: 25%;
    width: 55%;
    height: 52%;
    z-index: 70;
    opacity: 0.9;
    transform: translateZ(-50px);
  }
  .level-1 {
  }
  .level-2 {
  }
  .level-3 {
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
  /* background: linear-gradient(85deg, #ba39f7, #4992f8, #64c0d3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
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
  left: -19%;
  top: 55%;
  font-weight: 800;
  line-height: 0.9;
  font-size: 3rem;
  /* color: var(--blue); */
  /* -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.1vw; */
  transform: translateZ(50px);

  @media ${media.medium} {
    font-size: 2.5rem;
  }
  @media ${media.small} {
    font-size: 2rem;
    left: unset;
    top: unset;
    bottom: -18%;
    right: 0;
    /* -webkit-text-stroke: 0.3vw; */
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
  const tiltRef = useRef();

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
            toggleNoScroll();
          }}
        >
          <StyledName
            variants={titleVariants}
            initial='initial'
            animate='enter'
            exit='exit'
          >
            Pavel <br />
            Tomilin
          </StyledName>
          <StyledSpan
            variants={titleVariants}
            initial='initial'
            animate='enter'
            exit='exit'
          >
            frontend <br />
            developer
          </StyledSpan>

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
        {/* <StyledSquare className='level--1' />
        <StyledSquare className='level--2' /> */}
      </StyledTilt>

      <Social />
    </>
  );
};

export default Hero;
