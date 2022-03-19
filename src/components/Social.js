import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BsTelegram, BsGithub, BsLinkedin } from 'react-icons/bs';

const StyledSocial = styled(motion.div)`
  position: absolute;
  left: 5%;
  bottom: 8%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.5rem;
  overflow: hidden;
`;

const StyledLink = styled(motion.a)`
  color: ${props => props.theme.text};
  font-size: 1.3rem;
  display: flex;
`;

const socialVariants = {
  animate: {
    transition: {
      delayChildren: 2,
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
      <StyledLink
        href='#'
        variants={iconVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BsLinkedin />
      </StyledLink>
    </StyledSocial>
  );
};

export default Social;
