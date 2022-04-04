import React from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import styled from 'styled-components';
import { scrollToTop, toggleNoScroll } from '../../utils/utils';

// Components
import Hero from './Hero';
import Web from './Web';
import Work from './Work';
import Contacts from './Contacts';

const StyledSection = styled(motion.section)`
  width: 100vw;
  min-height: 100vh;
  position: relative;
`;

const StyledExitSquare = styled(motion.div)`
  position: fixed;
  background: linear-gradient(230deg, #ba39f7, #4992f8, #64c0d3);
  z-index: 500;
`;

const squareExitVariants = {
  initial: { width: '100%', height: 0, bottom: 0 },
  exit: {
    height: '100%',
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.5,
    },
  },
};

const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  return (
    <>
      <StyledSection>
        <Hero />
      </StyledSection>
      <StyledSection>
        <Web scrollYProgress={scrollYProgress} />
      </StyledSection>
      <StyledSection>
        <Work scrollYProgress={scrollYProgress} />
      </StyledSection>
      <StyledSection>
        <Contacts />
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

export default Home;
