import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';
import { socials } from '../../data';

const StyledAboutFooter = styled(motion.div)`
  width: 90%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 5rem 0 5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${media.small} {
    padding: 0 0 3rem;
  }
  @media ${media.xsmall} {
    padding: 0 0 2rem;
  }
`;
const StyledFooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const StyledFooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTitle = styled(motion.h2)`
  width: fit-content;
  font-size: 7vw;
  font-weight: 700;
  text-transform: uppercase;
  padding-bottom: 1vh;

  @media ${media.small} {
    font-size: 12.7vw;
    padding-bottom: 3vh;
  }
`;

const StyledTitleLink = styled(motion.a)`
  width: fit-content;
  font-size: 12vw;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 800;
  -webkit-text-stroke: 0.14vw ${props => props.theme.text};
  -webkit-text-fill-color: ${props => props.theme.background};

  &:hover {
    -webkit-text-fill-color: ${props => props.theme.text};
  }

  @media ${media.small} {
    font-size: 12.7vw;
  }
`;

const StyledThanks = styled.div`
  width: fit-content;
  font-size: 2.1rem;
  font-weight: 300;
  text-transform: uppercase;
  padding-bottom: 3vh;

  p:first-child {
    font-weight: 500;
  }
  p:last-child {
    line-height: 1.2;
  }

  @media ${media.small} {
    font-size: 12.7vw;
    padding-bottom: 3vh;
  }
`;
const StyledSocialLinks = styled.div`
  @media ${media.small} {
  }
`;
const StyledSocialLink = styled.a`
  @media ${media.small} {
  }
`;

const titleVariants = {
  offscreen: {
    y: '30%',
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const AboutFooter = () => {
  return (
    <StyledAboutFooter
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ amount: 0.2 }}
    >
      <StyledFooterTop>
        <StyledTitle variants={titleVariants}>Got some ideas?</StyledTitle>
        <StyledTitleLink
          href='mailto:pa.tomilin@gmail.com'
          variants={titleVariants}
        >
          Let's talk!
        </StyledTitleLink>
      </StyledFooterTop>
      <StyledFooterBottom>
        <StyledThanks>
          <p>Thanks for your visit!</p>
          <p>
            You can check out my networks <br /> to follow my new adventures!
          </p>
        </StyledThanks>
        <StyledSocialLinks>
          {socials.map((item, i) => (
            <StyledSocialLink key={i} href={item.href}>
              {item.name}
            </StyledSocialLink>
          ))}
        </StyledSocialLinks>
      </StyledFooterBottom>
    </StyledAboutFooter>
  );
};

export default AboutFooter;
