import React, { useState, useEffect } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';
import { toggleNoScroll } from '../../utils/utils';
import Hero from './Hero';
import Web from './Web';
import { Link } from 'react-router-dom';

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

const Work = styled.div`
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

  span {
  }

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
        <Work>
          <WorkCard>
            <WorkCardTitle>
              <p>
                Welcome! I'm Pavel Tomilin. I am passionate about everything
                related to a web technologies.
              </p>
              <span>🚀</span>
            </WorkCardTitle>
            <WorkCardSubTitle>
              <p>
                I am a Junior Frontend developer and i have currently learn. One
                of my aim when i create aplications is coding clean and
                effective. I also like to learn modern technologies to keep
                myself up to date. I rely on the most outstanding open source
                libraries <b>React</b> & <b>Redux</b> being these my tools to be
                able to solve any challenge.
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
        </Work>
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
