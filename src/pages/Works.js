import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { media } from '../styles/GlobalStyles';
import { scrollToTop, toggleNoScroll } from '../utils/utils';
import { works } from '../data';

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
const StyledWorksHeaderSection = styled(motion.section)`
  width: 100vw;
  height: 85vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  p {
    width: fit-content;
    text-transform: uppercase;
    font-size: 1vw;
    margin-left: 20%;
    overflow: hidden;

    @media ${media.small} {
      font-size: 2vw;
      margin-left: 10%;
    }
    @media ${media.xsmall} {
      font-size: 4vw;
      margin-left: 10%;
    }
  }
  h2 {
    font-size: 10vw;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    overflow: hidden;

    @media ${media.small} {
      font-size: 15vw;
    }
  }

  h2:nth-child(2) {
    padding-left: 30%;

    @media ${media.small} {
      padding-left: 20%;
    }
  }
  h2:nth-child(3) {
    padding-left: 40%;

    @media ${media.small} {
      padding-left: 30%;
    }
  }
`;

const StyledWorksInner = styled(motion.div)`
  margin: 0 auto;
  background: #d56040;
  width: 75%;
  min-height: 100vh;
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
  initial: { width: 0, height: '100%', bottom: 0 },
  exit: {
    width: '100%',
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.5,
    },
  },
};
const worksInnerVariants = {
  offscreen: {
    width: '75%',
  },
  onscreen: {
    width: '100%',
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const headerVariants = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.4,
      type: 'spring',
    },
  },
};
const headerItemEditionVariants = {
  initial: { scale: 0 },
  animate: {
    scale: [0, 1.3, 1],
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};
const headerItemVariants = {
  initial: { y: '100%', opacity: 0 },
  animate: {
    y: '0%',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      duration: 0.5,
    },
  },
};

const Works = () => {
  const controls = useAnimation();
  return (
    <>
      <StyledSquare
        variants={squareVariants}
        initial='initial'
        animate='enter'
        onAnimationStart={toggleNoScroll}
        onAnimationComplete={() => {
          toggleNoScroll();
        }}
      ></StyledSquare>
      <StyledWorksHeaderSection
        variants={headerVariants}
        initial='initial'
        animate='animate'
      >
        <motion.p variants={headerItemEditionVariants}>
          {new Date().getFullYear()} edition
        </motion.p>
        <motion.h2 variants={headerItemVariants}>Recent</motion.h2>
        <motion.h2 variants={headerItemVariants}>Works</motion.h2>
      </StyledWorksHeaderSection>
      <StyledSection>
        <StyledWorksInner
          variants={worksInnerVariants}
          initial='offscreen'
          whileInView='onscreen'
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          viewport={{ amount: 0.2 }}
        ></StyledWorksInner>
      </StyledSection>
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

export default Works;
