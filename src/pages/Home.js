import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../styles/GlobalStyles';
import Social from '../components/Social';
import Tilt from 'react-parallax-tilt';
import keyboard from '../assets/keyboard.mp4';
import { toggleNoScroll } from '../utils/utils';

const StyledSection = styled(motion.section)`
  width: 100vw;
  min-height: 100vh;
  position: relative;
`;

const StyledTilt = styled(Tilt)`
  height: 100vh;
  width: 100vw;
  transform-style: preserve-3d;
`;

const StyledSquare = styled(motion.div)`
  position: absolute;
  background: linear-gradient(230deg, #ba39f7, #4992f8, #64c0d3);
  transform-style: preserve-3d;
  z-index: 100;
`;
const StyledExitSquare = styled(motion.div)`
  position: fixed;
  background: linear-gradient(230deg, #ba39f7, #4992f8, #64c0d3);
  z-index: 500;
`;

const StyledTitle = styled(motion.h1)`
  position: absolute;
  left: -12%;
  top: 25%;
  display: flex;
  flex-direction: column;
  font-weight: 800;
  line-height: 0.9;
  text-transform: uppercase;
  transform: translateZ(100px);
`;

const StyledName = styled.span`
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
const StyledVideo = styled(motion.video)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.003);
`;

const squareVariants = {
  initial: { width: '100%', height: '100%', left: 0, top: 0 },
  enter: {
    width: '55%',
    height: '52%',
    left: '26%',
    top: '21%',

    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.2,
      delay: 0.7,
    },
  },
};
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
const titleVariants = {
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
const videoVariats = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
};

const Home = () => {
  const [playMarquee, setPlayMarquee] = useState(false);
  const [playTilt, setPlayTilt] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <>
      <StyledSection>
        <StyledTilt
          tiltEnable={playTilt}
          trackOnWindow
          tiltReverse
          tiltMaxAngleX={7}
          tiltMaxAngleY={7}
          perspective={700}
        >
          <StyledSquare
            variants={squareVariants}
            initial='initial'
            animate='enter'
            onAnimationStart={toggleNoScroll}
            onAnimationComplete={() => {
              setPlayTilt(true);
              controls.start('enter');
              toggleNoScroll();
            }}
          >
            <StyledTitle
              variants={titleVariants}
              initial='initial'
              animate='enter'
              exit='exit'
            >
              <StyledName>Pavel</StyledName>
              <StyledName>Tomilin</StyledName>
              <StyledSpan>frontend</StyledSpan>
              <StyledSpan>developer</StyledSpan>
            </StyledTitle>
            <StyledVideo
              autoPlay
              loop
              muted
              variants={videoVariats}
              initial='initial'
              animate={controls}
            >
              <source src={keyboard} type='video/mp4' />
            </StyledVideo>
          </StyledSquare>
        </StyledTilt>

        <Social />
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
