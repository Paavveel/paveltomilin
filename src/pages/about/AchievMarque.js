import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';
import Marquee from 'react-fast-marquee';

const StyledAchievMarquee = styled(Marquee)`
  margin: 5rem 0;

  &.marquee-container {
    width: 120%;
    overflow: hidden;
  }

  span {
    font-size: 9rem;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    padding: 0 3vw;
    display: inline-block;
    white-space: nowrap;

    &:nth-child(odd) {
      color: ${props => props.theme.text};
    }
    &:nth-child(even) {
      -webkit-text-stroke: 2px ${props => props.theme.text};
      -webkit-text-fill-color: transparent;
      font-style: italic;

      @media ${media.small} {
        -webkit-text-stroke: 1px ${props => props.theme.text};
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

const AchievMarque = () => {
  return (
    <StyledAchievMarquee gradient={false} speed={100}>
      <span>studies</span>
      <span>certificates</span>
      <span>studies</span>
      <span>certificates</span>
    </StyledAchievMarquee>
  );
};

export default AchievMarque;
