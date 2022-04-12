import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';
import keyboard from '../../assets/worksvideo.mp4';

const StyledWorksHeaderSection = styled(motion.section)`
  position: relative;
  width: 100vw;
  height: 85vh;

  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* &::before {
      content: '';
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    } */
  }

  p {
    width: fit-content;
    text-transform: uppercase;
    font-size: 1vw;
    /* color: var(--white); */
    margin-left: 20%;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-weight: 300;

    span {
      width: 3px;
      height: 3px;
      border-radius: 10px;
      /* background: var(--white); */
      background: ${props => props.theme.text};
    }

    @media ${media.medium} {
      font-size: 2vw;
    }
    @media ${media.small} {
      font-size: 3vw;
      margin-left: 10%;
    }
    @media ${media.xsmall} {
      font-size: 5vw;
      margin-left: 10%;
    }
  }
  h2 {
    font-size: 10vw;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    overflow: hidden;

    @media ${media.small} {
      font-size: 15vw;
    }
  }

  h2:nth-child(2) {
    /* color: var(--white); */
    padding-left: 30%;

    @media ${media.small} {
      padding-left: 20%;
    }
  }
  h2:nth-child(3) {
    background: linear-gradient(85deg, #ba39f7, #4992f8, #64c0d3);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-left: 40%;

    @media ${media.small} {
      padding-left: 30%;
    }
  }
`;

const StyledVideo = styled(motion.video)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const headerVariants = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.4,
      type: 'spring',
    },
  },
};
const headerItemEditionVariants = {
  initial: { scale: 0 },
  animate: {
    scale: [0, 1.3, 1],
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};
const headerItemVariants = {
  initial: { y: '100%', opacity: 0 },
  animate: {
    y: '0%',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      duration: 0.5,
    },
  },
};

const WorksHeader = () => {
  return (
    <StyledWorksHeaderSection
      variants={headerVariants}
      initial='initial'
      animate='animate'
    >
      {/* <StyledVideo autoPlay loop muted>
        <source src={keyboard} type='video/mp4' />
      </StyledVideo> */}
      <div>
        <motion.p variants={headerItemEditionVariants}>
          {new Date().getFullYear()} edition <span />
        </motion.p>
        <motion.h2 variants={headerItemVariants}>Recent</motion.h2>
        <motion.h2 variants={headerItemVariants}>Works</motion.h2>
      </div>
    </StyledWorksHeaderSection>
  );
};

export default WorksHeader;
