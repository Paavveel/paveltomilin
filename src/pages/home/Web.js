import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';

import code2x from '../../assets/code.jpg';

const StyledWeb = styled.div`
  padding: 14rem 1rem 14rem;
  position: relative;
  display: flex;
  flex-direction: column;

  @media ${media.small} {
    padding: 8rem 1rem 8rem;
  }
`;
const StyledTitleDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  line-height: 1;
  font-size: 10vw;
  font-weight: 800;
  text-transform: uppercase;

  span:first-child {
    color: var(--gray);
    font-style: italic;
  }

  span:last-child {
    color: ${props => props.theme.text};
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.1vw;
  }
`;
const StyledSubTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5vh;
  font-size: 2.5vw;
  text-align: center;
  z-index: 3;

  @media ${media.medium} {
    font-size: 3vw;
  }
  @media ${media.small} {
    font-size: 3.5vw;
    padding-top: 10vh;
  }
  @media ${media.xsmall} {
    font-size: 4.5vw;
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
  width: 200px;
  height: 200px;
  border-radius: 200px;
  background: #f4e15c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--black);
  font-size: 5vw;
  transform: rotate(325deg);

  @media ${media.medium} {
    width: 100px;
    height: 100px;
  }
  @media ${media.small} {
    width: 80px;
    height: 80px;
    bottom: 8%;
  }
  @media ${media.xsmall} {
    width: 50px;
    height: 50px;
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
        <StyledSubTitle
        // style={{
        //   y: subTitleScrollY,
        // }}
        >
          <p>Developer who cares deeply about user and code.</p>
          <p>Serious passion for new technologies.</p>
        </StyledSubTitle>
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
