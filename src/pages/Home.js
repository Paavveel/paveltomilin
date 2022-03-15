import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media, container, color } from '../styles/GlobalStyles';
import { AnimatePresence } from 'framer-motion';

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
  padding: 1rem;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  color: #c98371;
  position: absolute;
  left: -16%;
  top: 7rem;
  z-index: 10;
`;

const StyledSpanName = styled.span`
  font-weight: 800;
  font-size: 7rem;
  line-height: 1;
  letter-spacing: 3px;
  background: linear-gradient(-45deg, #23d5ab, #e73c7e, #23a6d5, #ee7752);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 4rem;

  @media ${media.small} {
    font-size: 3rem;
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
  background: ${props => props.theme.text};
  z-index: 9;
`;

const SquareVariant = {
  initial: { width: 0, height: 0, right: 0, bottom: 0 },
  enter: {
    width: '60%',
    height: '55%',
    right: 'unset',
    bottom: 'unset',
    left: '20%',
    top: '20%',
    scale: 0.8,
  },
  exit: {
    width: 0,
    height: 0,
    right: 0,
    bottom: 0,
    scale: 1.1,
    // transition: {
    //   ease: [0.6, 0.01, -0.05, 0.95],
    //   duration: 1.2,
    // },
  },
};

const Home = ({ setCursorHovered }) => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <AnimatePresence>
      <StyledHome key='home'>
        <BannerRowTop title={'<Hello/>'} setCursorHovered={setCursorHovered} />
        {/* <BannerRowCenter title={'experience'} playMarquee={playMarquee} /> */}
        {/* <BannerRowBottom title={'studio'} /> */}
        <SquareDiv
          variants={SquareVariant}
          initial='initial'
          animate='enter'
          exit='exit'
          // initial={{ width: 0, height: 0, right: 0, bottom: 0 }}
          // animate={{
          //   width: '60%',
          //   height: '55%',
          //   right: 'unset',
          //   bottom: 'unset',
          //   left: '20%',
          //   top: '20%',
          //   scale: 0.8,
          // }}
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.2,
            delay: 1.1,
          }}
          onMouseEnter={() => setCursorHovered(true)}
          onMouseLeave={() => setCursorHovered(false)}
        >
          <StyledH1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.5,
              delay: 2.2,
            }}
          >
            <StyledSpan>I am </StyledSpan>
            <StyledSpanName>Pavel Tomilin</StyledSpanName>
            <StyledSpan>front-end developer</StyledSpan>
          </StyledH1>
        </SquareDiv>
      </StyledHome>
    </AnimatePresence>
  );
};

const BannerRowTop = ({ title, setCursorHovered }) => {
  return (
    <BannerRow>
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

      {/* <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4,
        }}
      >
        <span className='row-message'>focused on the user & code.</span>
      </motion.div> */}
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
    {[...title].map(letter => (
      <RowTitle variants={disabled ? null : helloAni}>{letter}</RowTitle>
    ))}
  </RowTitle>
);

const AnimatedLetters = ({ title, disabled }) => (
  <RowTitle
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'
  >
    {[...title].map(letter => (
      <RowTitle variants={disabled ? null : letterAni}>{letter}</RowTitle>
    ))}
  </RowTitle>
);

export default Home;
