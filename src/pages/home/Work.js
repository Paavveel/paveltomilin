import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const StyledWork = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 0 1rem 14rem;
  color: var(--white);

  @media ${media.small} {
    padding: 8rem 1rem 8rem;
  }
`;
const WorkCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 1100px;
  width: 900px;
  padding: 5rem 10rem;
  margin-right: 20vw;
  background: linear-gradient(185deg, #ba39f7, #4992f8, #64c0d3);
  border-radius: 10px;

  @media ${media.medium} {
    min-height: 1000px;
    width: 700px;
    padding: 5rem 8rem;
    margin-right: 4rem;
  }
  @media ${media.small} {
    min-height: 800px;
    width: 400px;
    padding: 4rem 5rem;
    margin-right: 1rem;
  }
  @media ${media.xsmall} {
    min-height: 700px;
    width: 300px;
    padding: 3rem 2rem;
  }
`;
const WorkCardTitle = styled.div`
  position: relative;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;

  @media ${media.medium} {
    font-size: 2.5rem;
  }
  @media ${media.small} {
    font-size: 1.8rem;
  }
  @media ${media.xsmall} {
    font-size: 1.5rem;
  }

  span {
    position: absolute;
    font-size: 6rem;
    top: -50px;
    left: -80px;

    @media ${media.small} {
      font-size: 4rem;
      top: -30px;
      left: -60px;
    }
  }
`;
const WorkCardSubTitle = styled.div`
  font-size: 1.7rem;
  font-weight: normal;
  line-height: 1.5;

  b {
    font-weight: bold;
  }

  @media ${media.medium} {
    font-size: 1.5rem;
  }
  @media ${media.small} {
    font-size: 1rem;
  }
  @media ${media.small} {
    font-size: 1rem;
  }
`;

const WorkCardLink = styled(motion(Link))`
  font-size: 2.5rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--white);
  width: fit-content;

  @media ${media.medium} {
    font-size: 2rem;
  }
  @media ${media.small} {
    font-size: 1.5rem;
  }
  @media ${media.small} {
    font-size: 1.2rem;
  }
`;
const FirsrMarquee = styled(Marquee)`
  &.marquee-container {
    position: absolute;
    top: 30%;
    left: -50px;
    width: 120%;
    transform: rotate(356deg);
    background: ${props => props.theme.text};
    z-index: -1;
    overflow: hidden;
  }

  span {
    font-size: 14rem;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    padding: 0 1vw;
    display: inline-block;
    white-space: nowrap;

    &:nth-child(1) {
      color: ${props => props.theme.background};
    }
    &:nth-child(2) {
      color: var(--yellow);
    }
    &:nth-child(3) {
      color: var(--yellow);
    }
    &:nth-child(4) {
      -webkit-text-stroke: 1px ${props => props.theme.background};
      -webkit-text-fill-color: transparent;
    }
    &:nth-child(5) {
      color: ${props => props.theme.background};
    }

    @media ${media.medium} {
      font-size: 12rem;
    }
    @media ${media.small} {
      font-size: 10rem;
    }
    @media ${media.xsmall} {
      font-size: 6rem;
    }
  }
`;
const SecondMarquee = styled(Marquee)`
  &.marquee-container {
    position: absolute;
    top: 55%;
    left: -50px;
    width: 120%;
    transform: rotate(2deg);
    background: var(--yellow);
    z-index: -2;
    overflow: hidden;
  }

  span {
    font-size: 14rem;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    padding: 0 1vw;
    display: inline-block;
    white-space: nowrap;

    &:nth-child(odd) {
      color: var(--black);
    }
    &:nth-child(even) {
      -webkit-text-stroke: 1px var(--black);
      -webkit-text-fill-color: transparent;
    }

    @media ${media.medium} {
      font-size: 12rem;
    }
    @media ${media.small} {
      font-size: 10rem;
    }
    @media ${media.xsmall} {
      font-size: 6rem;
    }
  }
`;

const Work = () => {
  return (
    <StyledWork>
      <WorkCard>
        <WorkCardTitle>
          <p>
            Welcome! I'm Pavel Tomilin. I am passionate about everything related
            to a web technologies.
          </p>
          <span>🚀</span>
        </WorkCardTitle>
        <WorkCardSubTitle>
          <p>
            I am a Junior Frontend developer and i have currently learn. One of
            my aim when i create aplications is coding clean and effective. I
            also like to learn modern technologies to keep myself up to date. I
            rely on the most outstanding open source libraries <b>React</b> &{' '}
            <b>Redux</b> being these my tools to be able to solve any challenge.
          </p>
          <p>This page is an example of my skills as a developer.</p>
          <p>Check bellow:</p>
        </WorkCardSubTitle>
        <WorkCardLink
          to='works'
          whileHover={{
            scale: 1.1,
          }}
        >
          My works <span>💻</span>
        </WorkCardLink>
      </WorkCard>
      <FirsrMarquee gradient={false} speed={200}>
        <span>pavel tomilin</span>
        <span>-</span>
        <span>frontend</span>
        <span>developer</span>
        <span>-</span>
      </FirsrMarquee>
      <SecondMarquee gradient={false} speed={200} direction='right'>
        <span>javascript</span>
        <span>react</span>
        <span>html</span>
        <span>redux</span>
        <span>css</span>
        <span>git</span>
        <span>npm</span>
      </SecondMarquee>
    </StyledWork>
  );
};

export default Work;
