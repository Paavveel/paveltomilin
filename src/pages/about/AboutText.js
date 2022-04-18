import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useTransform } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';
import hoverEffect from 'hover-effect';
import heightMap from '../../assets/works/heightMap.png';

// test img
import avatar_mono from '../../assets/avatar_mono.jpg';
import avatar from '../../assets/avatar.jpg';

const StyledAboutText = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
  margin-top: 10rem;
  margin-bottom: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${media.medium} {
    gap: 3rem;
  }
  @media ${media.small} {
    gap: 0;
    margin-top: 0;
    margin-bottom: 5rem;
    flex-direction: column;
  }
  @media ${media.xsmall} {
    width: 90%;
  }
`;

const StyledAboutDescription = styled.div`
  width: 55%;

  @media ${media.small} {
    width: 100%;
  }

  p {
    font-size: 1.5vmax;
    font-weight: 400;
    line-height: 150%;
    overflow-wrap: break-word;
    padding: 1.5vw 0;

    @media ${media.small} {
      font-size: 1.8vmax;
      line-height: normal;
      padding: 1.5vw 0;
    }
    @media ${media.xsmall} {
      padding: 2vw 0;
    }
  }
`;

const StyledAboutAvatar = styled(motion.div)`
  width: 25vw;
  height: 30vw;
  align-self: center;
  overflow: hidden;

  @media ${media.small} {
    width: 50vw;
    height: 55vw;
  }
  @media ${media.xsmall} {
    width: 70vw;
    height: 75vw;
  }
`;

const AboutText = ({ scrollYProgress }) => {
  const avatarRef = useRef();
  const avatarOnScroll = useTransform(scrollYProgress, [0.1, 0.4], [300, -500]);

  useEffect(() => {
    new hoverEffect({
      parent: avatarRef.current,
      intensity: 0.4,
      angle: Math.PI / 8,
      speedIn: 1.5,
      speedOut: 1.5,
      image1: avatar_mono,
      image2: avatar,
      displacementImage: heightMap,
      imagesRatio: 1.15,
    });
  }, []);

  return (
    <StyledAboutText>
      <StyledAboutAvatar ref={avatarRef} style={{ y: avatarOnScroll }} />
      <StyledAboutDescription>
        <p>
          For whatever reason that brought you to my portfolio, welcome. I hope
          you enjoyed browsing this site as much as I enjoyed building it.
        </p>
        <p>
          I am a self taught Frontend developer currently based in Russia but
          available remotely.
        </p>
        <p>
          One of my passion in this life is coding. Since i love coding i also
          like to learn modern technologies to keep myself up to date. And i
          believe that it helps me to create websites and aplications with pure,
          effective, and flexible code. I'm always looking for chances to work
          with people who like to share their skills as much as i want to learn.
          At the end, my main aim is to create something creative with people
          that help me to discover my skills.
        </p>
        <p>
          In my spare time, when i'm not coding, i'm ussually workingout,
          watching movies, listening to EDM & rock music, and traveling.
        </p>
      </StyledAboutDescription>
    </StyledAboutText>
  );
};

export default AboutText;
