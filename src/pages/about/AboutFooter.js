import React from 'react';
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
    min-height: 70vh;
  }
  @media ${media.xsmall} {
    min-height: auto;
    padding: 3rem 0 3rem;
    justify-content: flex-start;
  }
`;
const StyledFooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media ${media.xsmall} {
    margin-bottom: 10vh;
  }
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
  background: linear-gradient(85deg, #ba39f7, #4992f8, #64c0d3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  padding-bottom: 1vh;

  @media ${media.small} {
    font-size: 8vw;
    padding-bottom: 3vh;
  }
  @media ${media.xsmall} {
    font-size: 8vw;
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
    font-size: 14vw;
  }
  @media ${media.xsmall} {
    font-size: 15vw;
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
    font-size: 1.7rem;
  }
  @media ${media.xsmall} {
    font-size: 1.2rem;
  }
`;

const StyledSocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2vw;

  @media ${media.small} {
    gap: 2vw;
  }
`;

const StyledSocialLink = styled(motion.a)`
  display: block;
  font-size: 1.6rem;
  color: var(--blue);
  font-weight: 300;
  text-transform: uppercase;
  width: fit-content;

  &:focus,
  &:hover {
    text-decoration: line-through;
    font-style: italic;
  }

  @media ${media.small} {
    font-size: 1.3rem;
  }
  @media ${media.xsmall} {
    font-size: 1rem;
  }
`;

const titleVariants = {
  offscreen: {
    y: '100px',
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
      transition={{
        duration: 0.4,
        ease: 'easeOut',
      }}
      viewport={{ amount: 0.4 }}
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
            Let's work together <br /> You can check out my networks!
          </p>
        </StyledThanks>
        <StyledSocialLinks>
          {socials.map((item, i) => (
            <StyledSocialLink
              key={i}
              href={item.href}
              whileHover={{
                scale: 1.1,
              }}
            >
              {item.name}
            </StyledSocialLink>
          ))}
        </StyledSocialLinks>
      </StyledFooterBottom>
    </StyledAboutFooter>
  );
};

export default AboutFooter;
