import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';

import code2x from '../../assets/code.jpg';
import codeParallax from '../../assets/code-parallax.jpg';
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
  display: flex;
  justify-content: center;
  line-height: 1;
  font-size: 10vw;
  font-weight: 800;
  text-transform: uppercase;
  padding-bottom: 25vh;

  @media ${media.small} {
    font-size: 15vw;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20vh;
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
  padding-top: 25vh;

  p:first-child {
    font-size: 12vw;
    padding-bottom: 10vh;
  }

  @media ${media.small} {
    font-size: 14vw;
    padding-top: 20vh;

    p:first-child {
      padding-bottom: 5vh;
    }
  }
`;

const StyledJsLogo = styled.div`
  position: absolute;
  bottom: 13%;
  left: 41%;
  width: 230px;
  height: 230px;
  border-radius: 200px;
  background: var(--yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--black);
  font-size: 5vw;
  transform: rotate(325deg);

  @media ${media.medium} {
    width: 150px;
    height: 150px;
  }
  @media ${media.small} {
    width: 100px;
    height: 100px;
    bottom: 8%;
  }
  @media ${media.xsmall} {
    width: 60px;
    height: 60px;
    bottom: 8%;
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

const Web = () => {
  const { scrollY, scrollX, scrollYProgress } = useViewportScroll();

  // const titleScrollY = useTransform(
  //   scrollYProgress,
  //   [0.1, 0.5],
  //   ['0', '-100%']
  // );
  // const subTitleScrollY = useTransform(
  //   scrollYProgress,
  //   [0.4, 0.7],
  //   ['0', '-100%']
  // );
  // const imgScrollY = useTransform(
  //   scrollYProgress,
  //   [0.2, 0.9],
  //   ['-30%', '-380%']
  // );

  return (
    <>
      <StyledWeb>
        <StyledTitleDiv
        // style={{
        //   y: titleScrollY,
        // }}
        >
          <span>web</span>
          <span>addicted.</span>
        </StyledTitleDiv>
        <ParallaxImage src={codeParallax}>
          <p>Developer who cares deeply about user and code.</p>
          <p>Serious passion for new technologies.</p>
        </ParallaxImage>

        <StyledDevDiv>
          <p>developed</p>
          <p>with react</p>
          <StyledJsLogo>
            <span>js</span>
          </StyledJsLogo>
        </StyledDevDiv>
      </StyledWeb>

      <StyledCodeImg
        height={500}
        width={500}
        src={code2x}
        // style={{
        //   y: imgScrollY,
        // }}
        alt='Web code'
      />
    </>
  );
};

export default Web;
