import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';

const StyledAboutSkillsInner = styled.div`
  width: 90%;
  margin: 0 auto;

  padding: 8rem 0;

  @media ${media.small} {
    padding: 3rem 0;
  }
`;

const StyledSkills = styled.div`
  width: 60%;

  @media ${media.small} {
    width: 100%;
  }

  h2 {
    font-size: 2.5vmax;

    @media ${media.small} {
      font-size: 2.9vmax;
    }
    @media ${media.xsmall} {
      font-size: 2.7vmax;
    }
  }
  p {
    font-size: 1.5vmax;
    font-weight: 300;
    line-height: 120%;
    margin-bottom: 2vw;

    &:last-of-type {
      font-weight: 400;
      padding-top: 4vw;

      @media ${media.small} {
        padding-top: 6vw;
      }
      @media ${media.xsmall} {
        padding-top: 8vw;
      }
    }

    @media ${media.small} {
      font-size: 1.8vmax;
      margin-bottom: 3vw;
    }
    @media ${media.xsmall} {
      margin-bottom: 4vw;
    }
  }
`;

const AboutSkills = () => {
  return (
    <StyledAboutSkillsInner>
      <StyledSkills>
        <h2>Languages</h2>
        <p>JavaScript(ES6+), HTML, CSS/Scss/Sass</p>
        <h2>Frameworks/Libraries/Others</h2>
        <p>
          React.js, React Router, Redux, Redux Toolkit, React Hook Form, Styled
          Components, Framer Motion, REST API, Axios, NPM, Webpack, Git
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
  );
};

export default AboutSkills;
