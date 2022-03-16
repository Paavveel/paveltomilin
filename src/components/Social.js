import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/GlobalStyles';
import { motion } from 'framer-motion';
import { BsTelegram, BsGithub, BsLinkedin } from 'react-icons/bs';

const StyledSocial = styled(motion.div)`
  position: absolute;
  left: 6%;
  bottom: 16%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.5rem;
  overflow: hidden;

  @media ${media.small} {
    left: 10%;
  }
`;

const StyledLink = styled(motion.a)`
  color: ${props => props.theme.text};
  font-size: 1.3rem;
  display: flex;

  @media ${media.xsmall} {
    font-size: 1rem;
  }
`;

const socialVariant = {
  animate: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.4,
      type: 'spring',
    },
  },
};
const iconVariant = {
  initial: { y: '200%', opacity: 0 },
  animate: {
    y: '0%',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};

const Social = () => {
  return (
    <StyledSocial variants={socialVariant} initial='initial' animate='animate'>
      <StyledLink
        href='https://t.me/paul_tm'
        variants={iconVariant}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BsTelegram />
      </StyledLink>
      <StyledLink
        href='https://github.com/Paavveel'
        variants={iconVariant}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BsGithub />
      </StyledLink>
      <StyledLink
        href='#'
        variants={iconVariant}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BsLinkedin />
      </StyledLink>
    </StyledSocial>
  );
};

export default Social;
