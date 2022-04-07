import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';
import { scrollToTop, toggleNoScroll } from '../../utils/utils';
import { keyframes } from 'styled-components';

const StyledSection = styled.section`
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

const StyledExitSquare = styled(motion.div)`
  position: fixed;
  background: linear-gradient(230deg, #ba39f7, #4992f8, #64c0d3);
  z-index: 500;
`;

const StyledAbout = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
  padding: 10rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${media.medium} {
    gap: 20px;
  }
  @media ${media.small} {
    flex-direction: column;
    gap: 0;
  }
  @media ${media.xsmall} {
    width: 90%;
  }
`;
const StyledAboutAvatar = styled.img`
  object-fit: contain;
  width: 460px;
  height: 460px;
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
const StyledAboutText = styled.div`
  width: 50%;
  font-size: 25px;

  @media ${media.medium} {
    font-size: 17px;
  }
  @media ${media.small} {
    width: 100%;
  }

  p {
    padding: 7px 0;
  }
  p:first-child {
    font-size: 2vmax;
    font-weight: 600;
  }

  span {
    font-size: 2.5vmax;
    animation-name: ${waveAnimation};
    animation-duration: 3.1s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
  }
`;
const squareVariants = {
  initial: { width: '100vw', height: '100vh', top: 0 },
  enter: {
    height: ['100vh', '0vh'],

    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.5,
    },
  },
};

const squareExitVariants = {
  initial: { height: '100%', width: 0, bottom: 0, right: 0 },
  exit: {
    width: '100%',
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.5,
    },
  },
};

const About = () => {
  return (
    <>
      <StyledSquare
        variants={squareVariants}
        initial='initial'
        animate='enter'
        onAnimationStart={toggleNoScroll}
        onAnimationComplete={toggleNoScroll}
      ></StyledSquare>

      <StyledSection>
        <StyledAbout>
          <StyledAboutAvatar
            src='https://via.placeholder.com/1080x1080'
            alt=' Avatar'
          />
          <StyledAboutText>
            <p>
              Hi <span>👋</span>, my name is Pavel Tomilin.
            </p>
            <p>
              For whatever reason that brought you to my portfolio, welcome. I
              hope you enjoyed browsing this site as much as I enjoyed building
              it.
            </p>
            <p>
              I am a self taught Frontend developer based in Russia but
              available remotely. One of my aim when i create aplications is
              coding clean and effective.
            </p>
            <p>
              One of my passion in this life is coding. Since i love coding i
              also like to learn modern technologies to keep myself up to date.
              And i believe that it helps me to create websites and aplications
              with pure, effective, and flexible code. I'm always looking for
              chances to work with people who like to share their skills as much
              as i want to learn. At the end, my main aim is to create something
              creative with people that help me to discover my skills.
            </p>
            <p>
              In my spare time, when i'm not coding, i'm ussually workingout,
              watching movies, listening to EDM & rock music, and traveling.
            </p>
          </StyledAboutText>
        </StyledAbout>
      </StyledSection>
      <StyledSection></StyledSection>
      <StyledExitSquare
        variants={squareExitVariants}
        initial='initial'
        exit='exit'
        onAnimationStart={toggleNoScroll}
        onAnimationComplete={() => {
          toggleNoScroll();
          scrollToTop();
        }}
      />
    </>
  );
};

export default About;
