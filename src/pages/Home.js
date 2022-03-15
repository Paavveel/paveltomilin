import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media, container, color } from '../styles/GlobalStyles';
import Social from '../components/Social';

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};
const hello = {
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};
const helloAni = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

const StyledHome = styled(motion.div)``;

const BannerRow = styled.div`
  overflow: hidden;
  z-index: 10;
`;

const StyledH1 = styled(motion.h1)`
  font-weight: 800;
  line-height: 0.9;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: -16%;
  top: 50%;
  z-index: 10;
`;

const StyledSpanName = styled.span`
  font-size: 4rem;
  letter-spacing: 7px;

  @media ${media.xsmall} {
    font-size: 3rem;
  }
`;

const StyledSpan = styled.span`
  font-size: 2rem;

  @media ${media.xsmall} {
    font-size: 1.5rem;
  }
`;

const BlinkedSpan = styled(motion.span)`
  font-size: 4rem;
  font-weight: 400;
  display: inline-block;
  white-space: nowrap;

  @media ${media.small} {
    font-size: 2.5rem;
  }
`;

const SquareDiv = styled(motion.div)`
  position: absolute;
  background: linear-gradient(230deg, #ba39f7, #4992f8, #64c0d3);
  z-index: 9;
`;

const SquareVariant = {
  initial: { width: '100%', height: '100%', left: 0, top: 0 },
  enter: {
    width: '60%',
    height: '55%',
    left: '30%',
    top: '20%',

    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.2,
      delay: 0.5,
    },
  },
  exit: {
    x: '-150%',
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.6,
    },
  },
};
const H1Variant = {
  initial: { opacity: 0, y: '-50%' },
  enter: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 0.5 },
  },
};

const Home = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <StyledHome>
      {/* <BannerRowTop title={'<Hello/>'} /> */}
      {/* <BannerRowCenter title={'experience'} playMarquee={playMarquee} /> */}
      {/* <BannerRowBottom title={'studio'} /> */}
      <SquareDiv
        variants={SquareVariant}
        initial='initial'
        animate='enter'
        exit='exit'
      >
        <StyledH1
          variants={H1Variant}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          <StyledSpanName>Pavel</StyledSpanName>
          <StyledSpanName>Tomilin</StyledSpanName>
          <StyledSpan>frontend</StyledSpan>
          <StyledSpan>developer</StyledSpan>
        </StyledH1>
      </SquareDiv>
      <Social />
    </StyledHome>
  );
};

const BannerRowTop = ({ title }) => {
  return (
    <BannerRow>
      <HelloLetters title={title} />
      <BlinkedSpan
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 0.5,
          ease: [0.6, 0.01, -0.05, 0.95],
          delay: 1.2,
        }}
      >
        |
      </BlinkedSpan>
    </BannerRow>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={'banner-row center'}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className='scroll'
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 1.8,
          }}
        >
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 1.8,
          }}
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && 'animate'}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='marquee__inner'
      >
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};

const RowTitle = styled(motion.span)`
  font-size: 4rem;
  font-weight: 400;
  position: relative;
  display: inline-block;
  white-space: nowrap;

  @media ${media.small} {
    font-size: 2.5rem;
  }
`;
const HelloLetters = ({ title, disabled }) => (
  <RowTitle
    variants={disabled ? null : hello}
    initial='initial'
    animate='animate'
  >
    {[...title].map((letter, i) => (
      <RowTitle key={i} variants={disabled ? null : helloAni}>
        {letter}
      </RowTitle>
    ))}
  </RowTitle>
);

const AnimatedLetters = ({ title, disabled }) => (
  <RowTitle
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'
  >
    {[...title].map((letter, i) => (
      <RowTitle key={i} variants={disabled ? null : letterAni}>
        {letter}
      </RowTitle>
    ))}
  </RowTitle>
);

export default Home;
