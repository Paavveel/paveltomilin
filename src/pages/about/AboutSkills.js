import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';

const StyledAboutSkills = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 5rem 0;

  @media ${media.small} {
    padding: 5.5rem 0;
  }
`;

const StyledSkillsTitle = styled.div`
  font-size: 4vmax;
  text-transform: uppercase;
  line-height: 1.1;
  margin-bottom: 5vh;

  h2 {
    font-weight: 700;
  }

  @media ${media.xsmall} {
    font-size: 3.6vmax;
  }
`;
const StyledSkillsContainer = styled.div`
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
    font-weight: 400;
    line-height: 120%;
    margin-bottom: 2vw;

    @media ${media.medium} {
      font-size: 17px;
    }
  }
`;

const AboutSkills = () => {
  return (
    <StyledAboutSkills>
      <StyledSkillsTitle>
        <h2>FRONTEND ADDICTED</h2>
        <h2>ROAD TO FULLSTACK.</h2>
      </StyledSkillsTitle>
      <StyledSkillsContainer>
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
        <p>Udemy, YouTube</p>
        <p>
          I developed this website with React.js, React Router, Styled
          Components. Animations are powered by Framer Motion.
        </p>
      </StyledSkillsContainer>
    </StyledAboutSkills>
  );
};

export default AboutSkills;
