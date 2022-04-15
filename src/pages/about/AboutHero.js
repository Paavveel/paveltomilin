import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useTransform } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';

const StyledAboutHero = styled(motion.div)`
  width: 90%;
  margin: 0 auto;
  height: 100vh;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: end;

  @media ${media.small} {
    justify-content: center;
  }
  @media ${media.xsmall} {
  }

  h1 {
    font-size: 15.5vmax;
    line-height: 13vw;
    font-weight: 800;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.12vw ${props => props.theme.text};
    text-transform: uppercase;

    @media ${media.small} {
      font-size: 13.5vmax;
      line-height: 18vw;
    }
    @media ${media.xsmall} {
      font-size: 8.5vmax;
      line-height: 21vw;
      -webkit-text-stroke: 0.1vw ${props => props.theme.text};
    }
  }
  h1:last-of-type {
    text-align: end;
  }
`;

const waveAnimation = keyframes`
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(14deg);
      } /* The following five values can be played with to make the waving more or less extreme */
      20% {
        transform: rotate(-8deg);
      }
      30% {
        transform: rotate(14deg);
      }
      40% {
        transform: rotate(-4deg);
      }
      50% {
        transform: rotate(10deg);
      }
      60% {
        transform: rotate(0deg);
      } /* Reset for the last half to pause */
      100% {
        transform: rotate(0deg);
      }
`;

const StyledAboutTextHello = styled(motion.p)`
  font-size: 3.3vmax;
  font-weight: 800;
  padding: 7px 0;
  transition: all 100ms ease;

  &:last-of-type {
    align-self: center;
  }

  @media ${media.small} {
    font-size: 3vmax;
  }
  @media ${media.xsmall} {
    font-size: 2.9vmax;
  }

  span:nth-child(1) {
    animation-name: ${waveAnimation};
    animation-duration: 3.1s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;

    font-size: 3.5vmax;

    @media ${media.xsmall} {
      font-size: 4vmax;
    }
  }
`;

const nameVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,

    transition: {
      duration: 0.6,
      delay: 1.5,
      ease: 'easeIn',
    },
  },
};
const devVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,

    transition: {
      duration: 1,
      delay: 1.8,
      ease: 'easeOut',
    },
  },
};

const AboutHero = ({ scrollYProgress }) => {
  const hiOnScroll = useTransform(scrollYProgress, [0, 0.13], [0, 700]);
  const devOnScroll = useTransform(scrollYProgress, [0, 0.13], [170, -700]);

  return (
    <StyledAboutHero initial='initial' animate='animate'>
      <StyledAboutTextHello style={{ x: hiOnScroll }}>
        Hi <span>👋</span>, my name is
      </StyledAboutTextHello>

      <motion.h1 variants={nameVariants}>Pavel</motion.h1>
      <motion.h1 variants={nameVariants}>Tomilin</motion.h1>

      <StyledAboutTextHello variants={devVariants} style={{ y: devOnScroll }}>
        Frontend Developer
      </StyledAboutTextHello>
    </StyledAboutHero>
  );
};

export default AboutHero;
