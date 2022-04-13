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

const SkillsMarquee = styled(Marquee)`
  &.marquee-container {
    width: 120%;
    background: var(--yellow);
    overflow: hidden;
  }

  span {
    font-size: 12rem;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    padding: 0 1vw;
    display: inline-block;
    white-space: nowrap;

    &:nth-child(odd) {
      color: var(--white);
    }
    &:nth-child(even) {
      -webkit-text-stroke: 1px var(--black);
      -webkit-text-fill-color: transparent;
      font-style: italic;
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
    @media ${media.small} {
      margin-bottom: 3vw;
    }
  }
`;

const AboutSkills = () => {
  return (
    <StyledSkillsContainer>
      <SkillsMarquee gradient={false} speed={100}>
        <span>Skills</span>
        <span>Skills</span>
        <span>Skills</span>
        <span>Skills</span>
        <span>Skills</span>
        <span>Skills</span>
      </SkillsMarquee>
      <StyledAboutSkillsInner>
        <StyledSkills>
          <h2>Languages</h2>
          <p>JavaScript(ES6+), HTML, CSS/Scss/Sass</p>
          <h2>Frameworks/Libraries/Others</h2>
          <p>
            React.js, React Router, Redux, Redux Toolkit, React Hook Form,
            Styled Components, Framer Motion, REST API, Axios, NPM, Webpack, Git
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
