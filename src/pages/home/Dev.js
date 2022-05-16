import React from 'react';
import { motion, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';

const StyledWeb = styled.div`
  padding: 14rem 0 20rem;
  position: relative;
  display: flex;
  flex-direction: column;

  @media ${media.small} {
    padding: 8rem 0 14rem;
  }
`;

const StyledDevDiv = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 700;

  p:nth-child(2) {
    font-style: italic;
  }

  p:first-child,
  p:nth-child(2) {
    font-size: 9vw;
    padding-bottom: 5vh;
  }
  p:nth-child(3) {
    font-size: 19vw;
  }

  @media ${media.small} {
    p:first-child,
    p:nth-child(2) {
      font-size: 12vw;
      padding-bottom: 3vh;
    }
    p:nth-child(3) {
      font-size: 23vw;
    }
  }
  @media ${media.xsmall} {
    p:first-child,
    p:nth-child(2) {
      font-size: 13vw;
    }
  }
`;

const StyledJsLogo = styled(motion.div)`
  position: absolute;
  bottom: -4%;
  right: 13%;
  width: 230px;
  height: 230px;
  border-radius: 200px;
  background: var(--yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--black);
  font-size: 5vw;

  @media ${media.medium} {
    width: 150px;
    height: 150px;
  }
  @media ${media.small} {
    width: 100px;
    height: 100px;
    right: 9%;
  }
  @media ${media.xsmall} {
    width: 60px;
    height: 60px;
    right: 7%;
  }
`;

const devVariants = {
  offscreen: {
    x: '-50%',
    opacity: 0,
  },
  onscreen: {
    x: '0%',
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
const withVariants = {
  offscreen: {
    scale: 0.3,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

const Web = ({ scrollYProgress }) => {
  const jsRotateOnScroll = useTransform(
    scrollYProgress,
    [0.15, 0.55],
    [-100, 150]
  );
  const reactColorOnScroll = useTransform(
    scrollYProgress,
    [0.22, 0.29, 0.36],
    ['#ff008c', '#23d5ab', '#7700ff']
  );

  return (
    <StyledWeb>
      <StyledDevDiv
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.p variants={devVariants}>developed</motion.p>
        <motion.p variants={withVariants}>with</motion.p>
        <motion.p style={{ color: reactColorOnScroll }}>react</motion.p>
        <StyledJsLogo style={{ rotate: jsRotateOnScroll }}>
          <span>js</span>
        </StyledJsLogo>
      </StyledDevDiv>
    </StyledWeb>
  );
};

export default Web;
