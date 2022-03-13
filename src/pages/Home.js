import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media, container, color } from '../styles/GlobalStyles';

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

const StyledHome = styled(motion.div)`
  position: relative;
`;

const BannerRow = styled.div`
  overflow: hidden;
`;

const StyledH1 = styled.h1`
  padding: 1rem;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;

  :last-child {
    color: ${color.peachpuff};
  }

  @media ${media.small} {
    width: auto;
  }
`;

const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 3rem;

  @media ${media.small} {
    font-size: 2rem;
  }
`;

const StyledSpanName = styled.span`
  font-weight: 800;
  font-size: 6rem;
  line-height: 1;
  letter-spacing: 3px;
  background: linear-gradient(-45deg, #23d5ab, #e73c7e, #23a6d5, #ee7752);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Home = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <StyledHome variants={banner}>
      <BannerRowTop title={'<Hello/>'} />
      <BannerRowCenter title={'experience'} playMarquee={playMarquee} />
      <BannerRowBottom title={'studio'} />
    </StyledHome>
  );
};

const BannerRowTop = ({ title }) => {
  return (
    <BannerRow>
      <BannerRow>
        <AnimatedLetters title={title} />
      </BannerRow>

      <StyledH1>
        <StyledSpan>I am </StyledSpan>
        <StyledSpanName>Pavel Tomilin</StyledSpanName>
        <StyledSpan>front-end developer</StyledSpan>
      </StyledH1>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4,
        }}
      >
        <span className='row-message'>focused on the user & code.</span>
      </motion.div>
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
