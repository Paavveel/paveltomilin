import React from 'react';
import { motion, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const StyledWork = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 14rem 0 14rem;
  color: var(--white);

  @media ${media.small} {
    padding: 8rem 0 8rem;
  }
`;
const WorkCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  width: 33vw;
  padding: 5rem 7rem;
  margin-right: 20vw;
  background: linear-gradient(185deg, #ba39f7, #4992f8, #64c0d3);
  border-radius: 10px;

  @media ${media.large} {
    padding: 5rem 6rem;
  }
  @media ${media.medium} {
    padding: 4rem 6rem;
    margin-right: 3rem;
  }
  @media ${media.small} {
    height: 80vh;
    width: 70vw;
    padding: 4rem 5rem;
    margin-right: 2rem;
  }
  @media ${media.xsmall} {
    height: 80vh;
    width: 80vw;
    padding: 3rem 2rem;
  }
  @media (max-width: 400px) {
    padding: 2rem 2rem;
  }
`;
const WorkCardTitle = styled.div`
  position: relative;
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.1;

  @media ${media.large} {
    font-size: 2rem;
  }
  @media ${media.medium} {
    font-size: 1.8rem;
  }
  @media ${media.small} {
    font-size: 2.5rem;
  }
  @media ${media.xsmall} {
    font-size: 1.7rem;
  }
  @media (max-width: 400px) {
    font-size: 1.4rem;
  }

  span {
    position: absolute;
    font-size: 6rem;
    top: -50px;
    left: -80px;

    @media ${media.large} {
      font-size: 5.5rem;
      left: -60px;
    }
    @media ${media.medium} {
      font-size: 5rem;
      top: -42px;
      left: -73px;
    }
    @media ${media.small} {
      font-size: 5rem;
      top: -40px;
      left: -60px;
    }
  }
`;
const WorkCardSubTitle = styled(motion.div)`
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1.5;

  b {
    font-weight: bold;
  }

  @media ${media.large} {
    font-size: 1.2rem;
  }
  @media ${media.medium} {
    font-size: 1.1rem;
  }
  @media ${media.small} {
    font-size: 1.2rem;
  }
  @media ${media.xsmall} {
    font-size: 1.07rem;
  }
  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

const WorkCardLink = styled(motion(Link))`
  font-size: 2.2rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--white);
  width: fit-content;

  @media ${media.large} {
    font-size: 2rem;
  }
  @media ${media.medium} {
    font-size: 2rem;
  }
  @media ${media.small} {
    font-size: 1.8rem;
  }
  @media ${media.xsmall} {
    font-size: 1.5rem;
  }
  @media (max-width: 400px) {
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
      font-size: 8rem;
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
    z-index: -3;
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
      font-size: 8rem;
    }
    @media ${media.small} {
      font-size: 10rem;
    }
    @media ${media.xsmall} {
      font-size: 6rem;
    }
  }
`;

const rocketVariants = {
  offscreen: {
    scale: 0,
  },
  onscreen: {
    scale: [0, 1.3, 1],
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

const Work = ({ scrollYProgress }) => {
  const xOnScroll = useTransform(
    scrollYProgress,
    [0.23, 0.56],
    ['-140%', '0%']
  );
  const yOnScroll = useTransform(scrollYProgress, [0.23, 0.56], ['-30%', '0%']);

  return (
    <StyledWork
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ amount: 0.72 }}
    >
      <WorkCard style={{ x: xOnScroll, y: yOnScroll }}>
        <WorkCardTitle>
          <motion.p>Welcome! I am Pavel Tomilin.</motion.p>
          <motion.span variants={rocketVariants}>????</motion.span>
        </WorkCardTitle>
        <WorkCardSubTitle>
          <p>
            Experience in Frontend about two years. I am looking for a team with
            which I can develop a product and receive professional development.
            I am constantly learning. I try to stay on top of my stack, take
            courses, read articles, and work on PET projects. I rely on the most
            outstanding open source libraries <b>React</b> & <b>Redux</b> being
            these my tools to be able to solve any challenge.
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
          My works <span>????</span>
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
