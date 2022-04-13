import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';

const StyledAboutHero = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${media.medium} {
    gap: 3rem;
  }
  @media ${media.small} {
    gap: 5.5rem;
    padding: 5.5rem 0;
    flex-direction: column-reverse;
  }
  @media ${media.xsmall} {
    width: 90%;
  }
`;
const StyledAboutAvatar = styled(motion.img)`
  object-fit: contain;
  width: 460px;
  height: 460px;

  @media ${media.medium} {
    width: 380px;
    height: 380px;
  }
`;

const waveAnimation = keyframes`
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(14deg);
      } /* The following five values can be played with to make the waving more or less extreme */
      20% {
        transform: rotate(-8deg);
      }
      30% {
        transform: rotate(14deg);
      }
      40% {
        transform: rotate(-4deg);
      }
      50% {
        transform: rotate(10deg);
      }
      60% {
        transform: rotate(0deg);
      } /* Reset for the last half to pause */
      100% {
        transform: rotate(0deg);
      }
`;
const StyledAboutText = styled(motion.div)`
  width: 55%;
  font-size: 25px;

  p {
    font-weight: 300;
    padding: 7px 0;
  }

  @media ${media.medium} {
    font-size: 17px;
  }
  @media ${media.small} {
    width: 100%;
  }
`;
const StyledAboutTextTitle = styled.h2`
  font-size: 2.5vmax;
  font-weight: 600;
  padding: 7px 0;

  @media ${media.xsmall} {
    font-size: 3.5vmax;
  }

  span:nth-child(1) {
    animation-name: ${waveAnimation};
    animation-duration: 3.1s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;

    @media ${media.xsmall} {
      font-size: 4vmax;
    }
  }

  span:nth-child(2) {
    font-weight: 700;
    background: linear-gradient(85deg, #ba39f7, #4992f8, #64c0d3);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media ${media.xsmall} {
      font-size: 3.5vmax;
    }
  }
`;
const StyledAboutLink = styled(motion.a)`
  display: inline-block;

  color: var(--blue);
  font-weight: 300;
  text-transform: uppercase;
  width: fit-content;

  &:focus,
  &:hover {
    text-decoration: line-through;
    font-style: italic;
  }
`;

const textVariants = {
  animate: {
    transition: {
      delayChildren: 1.7,
      staggerChildren: 0.3,
      type: 'spring',
    },
  },
};

const textItemVariants = {
  initial: { y: '40%', opacity: 0 },
  animate: {
    y: '0%',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 0.6,
    },
  },
};

const avatarVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.5,
      delay: 2.5,
    },
  },
};

const AboutHero = () => {
  return (
    <StyledAboutHero>
      <StyledAboutAvatar
        src='https://via.placeholder.com/1080x1080'
        alt=' Avatar'
        variants={avatarVariants}
        initial='initial'
        animate='animate'
      />
      <StyledAboutText
        variants={textVariants}
        initial='initial'
        animate='animate'
      >
        <StyledAboutTextTitle>
          Hi <span>👋</span>, my name is <span>Pavel Tomilin</span>.
        </StyledAboutTextTitle>
        <motion.p variants={textItemVariants}>
          For whatever reason that brought you to my portfolio, welcome. I hope
          you enjoyed browsing this site as much as I enjoyed building it.
        </motion.p>
        <motion.p variants={textItemVariants}>
          I am a self taught Frontend developer currently based in Russia but
          available remotely.
        </motion.p>
        <motion.p variants={textItemVariants}>
          One of my passion in this life is coding. Since i love coding i also
          like to learn modern technologies to keep myself up to date. And i
          believe that it helps me to create websites and aplications with pure,
          effective, and flexible code. I'm always looking for chances to work
          with people who like to share their skills as much as i want to learn.
          At the end, my main aim is to create something creative with people
          that help me to discover my skills.
        </motion.p>
        <motion.p variants={textItemVariants}>
          In my spare time, when i'm not coding, i'm ussually workingout,
          watching movies, listening to EDM & rock music, and traveling.
        </motion.p>
        <StyledAboutLink
          href='#'
          whileHover={{
            scale: 1.1,
          }}
          variants={textItemVariants}
        >
          Dowload CV
        </StyledAboutLink>
      </StyledAboutText>
    </StyledAboutHero>
  );
};

export default AboutHero;
