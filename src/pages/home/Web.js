import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';

import codeParallax from '../../assets/code-parallax.jpg';
import ParallaxImage from '../../components/ParallaxImage';

const StyledWeb = styled(motion.div)`
  padding: 14rem 0 14rem;
  position: relative;
  display: flex;
  flex-direction: column;

  @media ${media.small} {
    padding: 4rem 0 8rem;
  }
`;

const StyledTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  line-height: 1;
  font-size: 10vw;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 25vh;

  @media ${media.small} {
    font-size: 15vw;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20vh;
  }
  @media ${media.xsmall} {
    font-size: 15vw;
    flex-direction: column;
    align-items: center;
  }

  span:first-child {
    color: var(--yellow);
    font-style: italic;

    @media ${media.xsmall} {
      width: fit-content;
      font-size: 23vw;
    }
  }

  span:last-child {
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

const StyledDevDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 15vw;
  margin-top: 25vh;

  p:first-child,
  p:nth-child(2) {
    font-size: 10vw;
    padding-bottom: 5vh;
  }
  p:nth-child(3) {
    font-size: 22vw;
  }

  @media ${media.small} {
    font-size: 14vw;
    margin-top: 20vh;

    p:first-child,
    p:nth-child(2) {
      padding-bottom: 3vh;
    }
  }
`;

const StyledJsLogo = styled(motion.div)`
  position: absolute;
  bottom: -4%;
  right: 7%;
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
    width: 80px;
    height: 80px;
    bottom: -4%;
  }
  @media ${media.xsmall} {
    width: 60px;
    height: 60px;
    bottom: -4%;
  }
`;

const StyledCodeImg = styled(motion.img)`
  position: absolute;
  right: 10rem;
  bottom: 15rem;
  width: 400px;
  height: 500px;
  object-fit: cover;
  z-index: -1;

  @media ${media.medium} {
    width: 300px;
    height: 400px;
  }
  @media ${media.small} {
    width: 200px;
    height: 300px;
    right: 5rem;
    bottom: 5rem;
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

const Web = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();

  const jsRotateOnScroll = useTransform(
    scrollYProgress,
    [0.4, 0.7],
    [-150, 150]
  );
  const reactColorOnScroll = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.59],
    ['#ff008c', '#7700ff', '#23d5ab']
  );
  const subTitleScrollY = useTransform(
    scrollYProgress,
    [0.25, 0.35],
    ['-150%', '120%']
  );
  // const imgScrollY = useTransform(
  //   scrollYProgress,
  //   [0.2, 0.9],
  //   ['-30%', '-380%']
  // );

  return (
    <>
      <StyledWeb
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, margin: '-45%' }}
      >
        <StyledTitleDiv>
          <motion.span variants={webVariants}>web</motion.span>
          <motion.span variants={addictedVariants}>addicted.</motion.span>
        </StyledTitleDiv>
        <ParallaxImage src={codeParallax}>
          <p>Developer who cares deeply about user and code.</p>
          <p>Serious passion for new technologies.</p>
        </ParallaxImage>

        <StyledDevDiv>
          <p>developed</p>
          <p>with</p>
          <motion.p style={{ color: reactColorOnScroll }}>react</motion.p>
          <StyledJsLogo style={{ rotate: jsRotateOnScroll }}>
            <span>js</span>
          </StyledJsLogo>
        </StyledDevDiv>
      </StyledWeb>

      {/* <StyledCodeImg
        height={500}
        width={500}
        src={code2x}
        style={{
          y: imgScrollY,
        }}
        alt='Web code'
      /> */}
    </>
  );
};

export default Web;
