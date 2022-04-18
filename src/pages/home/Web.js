import React from 'react';
import { motion, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';

// Assets
import codeParallax from '../../assets/code-parallax.jpg';

// Components
import ParallaxImage from '../../components/ParallaxImage';

const StyledWeb = styled.div`
  padding: 14rem 0 14rem;
  position: relative;
  display: flex;
  flex-direction: column;

  @media ${media.small} {
    padding: 4rem 0 8rem;
  }
`;

const StyledTitleDiv = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  line-height: 1;
  font-size: 10vw;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 28rem;

  @media ${media.small} {
    font-size: 12vw;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16rem;
  }
  @media ${media.xsmall} {
    font-size: 15vw;
    flex-direction: column;
    align-items: center;
  }

  p:first-child {
    color: var(--yellow);
    font-style: italic;

    @media ${media.xsmall} {
      width: fit-content;
      font-size: 23vw;
    }
  }

  p:nth-child(2) {
    color: ${props => props.theme.text};
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.1vw;

    @media ${media.small} {
      -webkit-text-stroke: 0.3vw;
    }
    @media ${media.xsmall} {
      width: fit-content;
    }
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
  margin-top: 25vh;

  p:nth-child(2) {
    font-style: italic;
  }

  p:first-child,
  p:nth-child(2) {
    font-size: 8vw;
    padding-bottom: 5vh;
  }
  p:nth-child(3) {
    font-size: 19vw;
  }

  @media ${media.small} {
    margin-top: 20vh;

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

const webVariants = {
  offscreen: {
    x: '-50%',
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.1, 0.01, -0.05, 0.95],
    },
  },
};
const addictedVariants = {
  offscreen: {
    x: '50%',
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, 0.01, -0.05, 0.95],
      delay: 0.1,
    },
  },
};

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
    [0.4, 0.7],
    [-150, 150]
  );
  const reactColorOnScroll = useTransform(
    scrollYProgress,
    [0.46, 0.5, 0.59],
    ['#ff008c', '#23d5ab', '#7700ff']
  );

  return (
    <>
      <StyledWeb>
        <StyledTitleDiv
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.9 }}
        >
          <motion.p variants={webVariants}>web</motion.p>
          <motion.p variants={addictedVariants}>addicted.</motion.p>
        </StyledTitleDiv>
        <ParallaxImage src={codeParallax}>
          <p>Developer who cares deeply about user and code.</p>
          <p>Serious passion for new technologies.</p>
        </ParallaxImage>

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
    </>
  );
};

export default Web;
