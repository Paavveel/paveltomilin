import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';
import Marquee from 'react-fast-marquee';

const StyledSkillsMarquee = styled(Marquee)`
  margin: 5rem 0;

  &.marquee-container {
    width: 120%;
    background: var(--yellow);
    overflow: hidden;
  }

  span {
    font-size: 10rem;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    padding: 0 3vw;
    display: inline-block;
    white-space: nowrap;

    &:nth-child(odd) {
      color: var(--white);
    }
    &:nth-child(even) {
      -webkit-text-stroke: 2px var(--black);
      -webkit-text-fill-color: transparent;
      font-style: italic;

      @media ${media.small} {
        -webkit-text-stroke: 1px var(--black);
      }
    }

    @media ${media.small} {
      font-size: 5rem;
    }
    @media ${media.xsmall} {
      font-size: 4rem;
    }
  }

  @media ${media.small} {
    margin: 3rem 0;
  }
`;

const SkillsMarque = () => {
  return (
    <StyledSkillsMarquee gradient={false} speed={100}>
      <span>Skills</span>
      <span>Skills</span>
      <span>Skills</span>
      <span>Skills</span>
      <span>Skills</span>
      <span>Skills</span>
    </StyledSkillsMarquee>
  );
};

export default SkillsMarque;
