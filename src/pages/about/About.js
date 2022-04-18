import React from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll } from 'framer-motion';
import { scrollToTop, toggleNoScroll } from '../../utils/utils';

// Components
import AboutHero from './AboutHero';
import AboutText from './AboutText';
import AboutSkills from './AboutSkills';
import AboutAchiev from './AboutAchiev';
import AboutFooter from './AboutFooter';
import SkillsMarque from './SkillsMarque';
import AchievMarque from './AchievMarque';

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
  const { scrollYProgress } = useViewportScroll();

  return (
    <>
      <StyledSquare
        variants={squareVariants}
        initial='initial'
        animate='enter'
        onAnimationStart={toggleNoScroll}
        onAnimationComplete={toggleNoScroll}
      ></StyledSquare>
      <AboutHero scrollYProgress={scrollYProgress} />
      <AboutText scrollYProgress={scrollYProgress} />
      <SkillsMarque />
      <AboutSkills />
      <AchievMarque />
      <AboutAchiev />
      <AboutFooter />
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
