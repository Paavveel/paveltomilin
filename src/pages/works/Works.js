import React from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';
import { scrollToTop, toggleNoScroll } from '../../utils/utils';
import { works } from '../../data';

// Components
import WorkCard from './WorkCard';
import WorksHeader from './WorksHeader';
import WorksFooter from './WorksFooter';

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

const StyledWorksInner = styled(motion.div)`
  position: relative;
  margin: 0 auto;
  opacity: 0;
  color: var(--white);
`;
const StyledWorksCounter = styled.p`
  position: absolute;
  top: 6.5vh;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  text-transform: uppercase;
  font-size: 1vw;
  font-weight: 300;

  @media ${media.medium} {
    font-size: 2vw;
  }
  @media ${media.small} {
    font-size: 3vw;
  }
  @media ${media.xsmall} {
    font-size: 5vw;
  }
`;
const StyledWorkContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  padding-top: 30vh;
  padding-bottom: 30vh;
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
  animate: {
    scale: [0.8, 1],
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
  offscreen: {
    width: '75%',
  },
  onscreen: {
    width: '100%',
    transition: {
      ease: 'easeOut',
    },
  },
};

const Works = () => {
  const { scrollYProgress } = useViewportScroll();
  const worksInnerColorOnScroll = useTransform(
    scrollYProgress,
    [0.25, 0.33, 0.5, 0.65, 0.8],
    ['#d56040', '#114180', '#8b5cf9', '#1d9675', '#4992f8']
  );

  return (
    <>
      <StyledSquare
        variants={squareVariants}
        initial='initial'
        animate='enter'
        onAnimationStart={toggleNoScroll}
        onAnimationComplete={toggleNoScroll}
      ></StyledSquare>
      <WorksHeader />
      <StyledSection>
        <StyledWorksInner
          variants={worksInnerVariants}
          initial='offscreen'
          whileInView='onscreen'
          animate='animate'
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          viewport={{ once: true, amount: 0.04 }}
          style={{ backgroundColor: worksInnerColorOnScroll }}
        >
          <StyledWorksCounter>
            Selected works ({works.length})
          </StyledWorksCounter>
          <StyledWorkContainer>
            {works.map((work, i) => (
              <WorkCard key={i} {...work} />
            ))}
          </StyledWorkContainer>
        </StyledWorksInner>
      </StyledSection>
      <WorksFooter />
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
