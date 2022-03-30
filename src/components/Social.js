import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../styles/GlobalStyles';
import { BsTelegram, BsGithub } from 'react-icons/bs';
import { SiMaildotru } from 'react-icons/si';

const StyledSocial = styled(motion.div)`
  position: absolute;
  left: 4%;
  bottom: 8%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  padding: 0.5rem;
  overflow: hidden;

  @media ${media.small} {
    left: 8%;
    bottom: 4%;
  }
`;

const StyledLink = styled(motion.a)`
  color: ${props => props.theme.text};
  font-size: 2rem;
  display: flex;
`;

const socialVariants = {
  animate: {
    transition: {
      delayChildren: 2.7,
      staggerChildren: 0.4,
      type: 'spring',
    },
  },
};
const iconVariants = {
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
    <StyledSocial variants={socialVariants} initial='initial' animate='animate'>
      <StyledLink
        href='mailto:pa.tomilin@gmail.com'
        variants={iconVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <SiMaildotru />
      </StyledLink>
      <StyledLink
        href='https://t.me/paul_tm'
        variants={iconVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BsTelegram />
      </StyledLink>

      <StyledLink
        href='https://github.com/Paavveel'
        variants={iconVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BsGithub />
      </StyledLink>
    </StyledSocial>
  );
};

export default Social;
