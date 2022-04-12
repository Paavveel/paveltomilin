import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';
import Marquee from 'react-fast-marquee';

const StyledSkillsContainer = styled.div`
  padding: 5rem 0;

  @media ${media.small} {
    padding: 5.5rem 0;
  }

  @media ${media.xsmall} {
    font-size: 3.6vmax;
  }
`;

const StyledAboutSkillsInner = styled.div`
  width: 90%;
  margin: 0 auto;

  padding-top: 10rem;

  @media ${media.small} {
    padding-top: 11rem;
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

const StyledSkills = styled.div`
  width: 60%;

  @media ${media.small} {
    width: 100%;
  }

  h2 {
    font-size: 2.5vmax;

    @media ${media.xsmall} {
      font-size: 2.7vmax;
    }
  }
  p {
    font-size: 1.5vmax;
    font-weight: 300;
    line-height: 120%;
    margin-bottom: 2vw;

    @media ${media.medium} {
      font-size: 17px;
    }
  }
`;

const AboutSkills = () => {
  return (
    <StyledSkillsContainer>
      <FirsrMarquee gradient={false} speed={100} direction='right'>
        <span>My Skills</span>
        <span>-</span>
        <span>My Skills</span>
        <span>Skills</span>
        <span>-</span>
      </FirsrMarquee>
      <SecondMarquee gradient={false} speed={100}>
        <span>Languages</span>
        <span>Frameworks</span>
        <span>Libraries</span>
        <span>Learning</span>
      </SecondMarquee>
      <StyledAboutSkillsInner>
        <StyledSkills>
          <h2>Languages</h2>
          <p>JavaScript(ES6+), HTML, CSS/Scss/Sass</p>
          <h2>Frameworks/Libraries/Others</h2>
          <p>
            React.js, React Router, Redux, React Hook Form, Styled Components,
            Framer Motion, REST API, Axios, NPM, Webpack, Git
          </p>
          <h2>UI/UX</h2>
          <p>
            Semantics, Responsive/Adaptive Design, Figma, Photoshop, Usability
            Testing
          </p>
          <h2>Learning</h2>
          <p>TypeScript, Node.js</p>
          <h2>Other Skills</h2>
          <p>Content Creation, Media Management</p>
          <h2>Education</h2>
          <p>
            Specialist, State and municipal administration <br />
            Moscow State Regional Institute of Social Studies and Humanities{' '}
            <br />
            July 2015
          </p>
          <p>
            Profession Front-end Developer <br />
            HTML Academy <br /> November 2020
          </p>
          <p>
            I developed this website with React.js, React Router, Styled
            Components. Animations are powered by Framer Motion.
          </p>
        </StyledSkills>
      </StyledAboutSkillsInner>
    </StyledSkillsContainer>
  );
};

export default AboutSkills;
