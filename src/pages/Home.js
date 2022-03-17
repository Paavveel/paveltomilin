import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../styles/GlobalStyles';
import Social from '../components/Social';
import Tilt from 'react-parallax-tilt';
import video from '../assets/video.mp4';

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
      delayChildren: 3.5,
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
  left: -12%;
  top: 25%;
  z-index: 10;
  transform: translateZ(100px);
`;

const StyledSpanName = styled.span`
  font-size: 4.5rem;
  letter-spacing: 3px;

  @media ${media.medium} {
    font-size: 4rem;
  }
  @media ${media.small} {
    font-size: 3.5rem;
  }
  @media ${media.xsmall} {
    font-size: 2.5rem;
  }
`;

const StyledSpan = styled.span`
  font-size: 3rem;

  @media ${media.medium} {
    font-size: 2.5rem;
  }
  @media ${media.small} {
    font-size: 2rem;
  }
  @media ${media.xsmall} {
    font-size: 1.5rem;
  }
`;

const SquareDiv = styled(motion.div)`
  position: absolute;
  background: linear-gradient(230deg, #ba39f7, #4992f8, #64c0d3);
  z-index: 9;
  transform-style: preserve-3d;
`;
const StyledTilt = styled(Tilt)`
  height: 100vh;
  width: 100vw;
  transform-style: preserve-3d;
`;

const SquareVariant = {
  initial: { width: '100%', height: '100%', left: 0, top: 0 },
  enter: {
    width: '55%',
    height: '52%',
    left: '30%',
    top: '18%',

    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.2,
      delay: 0.5,
    },
  },
  exit: {
    x: '-160%',
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.6,
    },
  },
};
const H1Variant = {
  initial: { opacity: 0 },
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
  const [playTilt, setPlayTilt] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <StyledHome>
      {/* <Type /> */}
      {/* <BannerRowCenter title={'experience'} playMarquee={playMarquee} /> */}
      {/* <BannerRowBottom title={'studio'} /> */}
      <StyledTilt
        tiltEnable={playTilt}
        trackOnWindow
        tiltReverse
        tiltMaxAngleX={7}
        tiltMaxAngleY={7}
        perspective={700}
      >
        <SquareDiv
          variants={SquareVariant}
          initial='initial'
          animate='enter'
          // exit='exit'
          onAnimationComplete={() => setPlayTilt(true)}
        >
          <StyledH1 variants={H1Variant}>
            <StyledSpanName>Pavel</StyledSpanName>
            <StyledSpanName>Tomilin</StyledSpanName>
            <StyledSpan>frontend</StyledSpan>
            <StyledSpan>developer</StyledSpan>
          </StyledH1>
          <video autoPlay loop muted style={{ width: '100%', height: '100%' }}>
            <source src={video} type='video/mp4' />
          </video>
        </SquareDiv>
      </StyledTilt>

      <Social />
    </StyledHome>
  );
};

const BannerRowTop = ({ title }) => {
  return (
    <BannerRow>
      <HelloLetters title={title} />
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
