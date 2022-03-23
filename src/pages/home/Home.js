import React, { useState, useEffect } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';
import { toggleNoScroll } from '../../utils/utils';
import Hero from './Hero';
import Web from './Web';

const StyledSection = styled(motion.section)`
  width: 100vw;
  min-height: 100vh;
  position: relative;
`;

const StyledExitSquare = styled(motion.div)`
  position: fixed;
  background: linear-gradient(230deg, #ba39f7, #4992f8, #64c0d3);
  z-index: 500;
`;

const squareExitVariants = {
  initial: { width: '100%', height: 0, bottom: 0 },
  exit: {
    height: '100%',
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.5,
    },
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
    <>
      <StyledSection>
        <Hero />
      </StyledSection>
      <StyledSection>
        <Web />
      </StyledSection>
      <StyledSection>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam aperiam
        similique soluta aspernatur non corporis, quae odit! Tempora
        necessitatibus quos, expedita rerum quidem tempore harum ducimus
        architecto. Aliquam officiis suscipit nisi, accusantium exercitationem,
        veritatis voluptatum assumenda saepe et animi ex impedit eveniet
        repellendus neque totam sapiente non. Tenetur iusto harum mollitia
        consectetur, inventore a et eligendi ab aut necessitatibus asperiores ea
        incidunt, sapiente minus quis autem atque dolorem at laboriosam?
        Nesciunt ipsum atque vel deserunt nihil doloribus eum molestiae, sit
        commodi facilis laboriosam expedita voluptatum error qui inventore
        adipisci perferendis. Natus eum culpa quo ut error veritatis quos est.
        Deserunt magni, quidem accusantium esse dignissimos voluptates sit saepe
        eligendi, molestiae nesciunt fuga odio at nemo ipsam eveniet blanditiis
        ea. Quidem nesciunt tenetur hic excepturi maxime nulla corrupti iure.
        Molestiae at fugit quasi incidunt commodi nihil culpa voluptas eos,
        consequatur placeat magni inventore corporis dolores nemo? Quos veniam
        necessitatibus autem iste mollitia repellendus architecto impedit fugiat
        saepe error asperiores enim, consequuntur molestiae voluptates! Eveniet
        minus incidunt ad, voluptatem commodi architecto odit ipsum possimus
        adipisci soluta neque esse corrupti alias laboriosam, praesentium earum
        nobis voluptate natus suscipit deserunt voluptas ullam. Illum nostrum
        eligendi error sed quidem, ipsam eveniet ducimus accusamus minima
        cupiditate.
      </StyledSection>
      <StyledExitSquare
        variants={squareExitVariants}
        initial='initial'
        exit='exit'
        onAnimationStart={toggleNoScroll}
        onAnimationComplete={toggleNoScroll}
      />
      {/* <BannerRowCenter title={'experience'} playMarquee={playMarquee} /> */}
      {/* <BannerRowBottom title={'studio'} /> */}
    </>
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
    {[...title].map((letter, i) => (
      <RowTitle key={i} variants={disabled ? null : letterAni}>
        {letter}
      </RowTitle>
    ))}
  </RowTitle>
);

export default Home;
