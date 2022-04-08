import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';
import Marquee from 'react-fast-marquee';

const StyledAboutAchive = styled.div`
  position: relative;
  padding: 5rem 0;
  min-height: 100vh;

  @media ${media.small} {
    padding: 5.5rem 0;
  }
`;
const StyledAchiveContainer = styled.div`
  padding: 10rem 0;
  padding-right: 5vw;
  display: flex;
  justify-content: flex-end;

  @media ${media.small} {
    padding: 11rem 0;
  }

  @media ${media.small} {
  }
`;
const StyledAchiveInner = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;

  @media ${media.small} {
  }
`;
const StyledAchiveName = styled.div`
  @media ${media.small} {
  }
`;
const StyledAchiveDate = styled.div`
  @media ${media.small} {
  }
`;

const FirsrMarquee = styled(Marquee)`
  &.marquee-container {
    width: 120%;
    background: ${props => props.theme.text};
    overflow: hidden;
  }

  span {
    font-size: 10rem;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    padding: 0 1vw;
    display: inline-block;
    white-space: nowrap;

    &:nth-child(1) {
      color: ${props => props.theme.background};
    }
    &:nth-child(2) {
      color: var(--yellow);
    }
    &:nth-child(3) {
      color: var(--yellow);
    }
    &:nth-child(4) {
      -webkit-text-stroke: 1px ${props => props.theme.background};
      -webkit-text-fill-color: transparent;
    }
    &:nth-child(5) {
      color: ${props => props.theme.background};
    }

    @media ${media.medium} {
      font-size: 12rem;
    }
    @media ${media.small} {
      font-size: 10rem;
    }
    @media ${media.xsmall} {
      font-size: 6rem;
    }
  }
`;
const SecondMarquee = styled(Marquee)`
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
    padding: 0 1vw;
    display: inline-block;
    white-space: nowrap;

    &:nth-child(odd) {
      color: var(--black);
    }
    &:nth-child(even) {
      -webkit-text-stroke: 1px var(--black);
      -webkit-text-fill-color: transparent;
    }

    @media ${media.medium} {
      font-size: 12rem;
    }
    @media ${media.small} {
      font-size: 10rem;
    }
    @media ${media.xsmall} {
      font-size: 6rem;
    }
  }
`;

const AboutAchive = () => {
  return (
    <StyledAboutAchive>
      <FirsrMarquee gradient={false} speed={100}>
        <span>education</span>
        <span>-</span>
        <span>certificates</span>
        <span>education</span>
        <span>-</span>
      </FirsrMarquee>
      <SecondMarquee gradient={false} speed={100} direction='right'>
        <span>achievements</span>
        <span>achievements</span>
      </SecondMarquee>
      <StyledAchiveContainer>
        <StyledAchiveInner>
          <StyledAchiveName>
            <p>html1</p>
            <p>html2</p>
            <p>js1</p>
            <p>frontend</p>
          </StyledAchiveName>
          <StyledAchiveDate>
            <p>Feb 2020</p>
            <p>March 2020</p>
            <p>March 2020</p>
            <p>March 2020</p>
          </StyledAchiveDate>
        </StyledAchiveInner>
      </StyledAchiveContainer>
    </StyledAboutAchive>
  );
};

export default AboutAchive;
