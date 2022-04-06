import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';

const StyledWorksHeaderSection = styled(motion.section)`
  width: 100vw;
  height: 85vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    width: fit-content;
    text-transform: uppercase;
    font-size: 1vw;
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
      <motion.p variants={headerItemEditionVariants}>
        {new Date().getFullYear()} edition <span />
      </motion.p>
      <motion.h2 variants={headerItemVariants}>Recent</motion.h2>
      <motion.h2 variants={headerItemVariants}>Works</motion.h2>
    </StyledWorksHeaderSection>
  );
};

export default WorksHeader;
