import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';
import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa';
import hoverEffect from 'hover-effect';
import heightMap from '../../assets/works/heightMap.png';

const StyledWorkCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 5vh 0;

  @media ${media.small} {
    gap: 3rem;
  }
  @media ${media.xsmall} {
    gap: 2rem;
  }
`;
const StyledWorkNumber = styled.p`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 300;

  span {
    width: 3px;
    height: 3px;
    border-radius: 10px;
    background: var(--white);
  }

  @media ${media.medium} {
    font-size: 2vw;
  }
  @media ${media.small} {
    font-size: 3vw;
  }
  @media ${media.xsmall} {
    font-size: 5vw;
    gap: 0.4rem;
  }
`;
const StyledWorkBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  gap: 25px;
`;

const StyledWorkTitle = styled.p`
  width: fit-content;
  font-size: 6.9vmax;
  line-height: 1;
`;
const StyledWorkDescription = styled.p`
  font-size: 17px;
  text-align: justify;
  font-weight: 300;
`;
const StyledWorkTech = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 17px;

  span {
    font-size: 18.5px;
    font-weight: 500;
    text-transform: uppercase;
  }

  ul {
    columns: 2;
    font-weight: 300;
  }
`;
const StyledWorkLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: fit-content;

  text-transform: uppercase;

  a {
    display: flex;
    align-items: center;
    width: fit-content;
    gap: 0.5rem;
    font-size: 20px;
    line-height: 1;
    color: var(--white);

    svg {
      font-size: 30px;
    }
  }
`;
const StyledWorkBottomRow = styled.div`
  display: flex;
  gap: 60px;

  @media ${media.small} {
    flex-direction: column-reverse;
  }
`;
const StyledLeftRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const StyledWorkImgLink = styled.a`
  color: var(--white);
`;

const StyledWorkImgConteiner = styled.div`
  position: relative;
  width: 60vw;
  height: 30vw;
  box-shadow: 0.5px 0.5px 4px #070707;

  p {
    position: absolute;
    bottom: -30px;
    right: 10px;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 300;
  }

  @media ${media.small} {
    width: 85vw;
    height: 45vw;
  }
`;

const StyledWorkLine = styled(motion.div)`
  height: 5px;
  background: var(--white);
`;

const workCardVariants = {
  offscreen: {
    opacity: 0.2,
  },
  onscreen: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
};
const workLineVariants = {
  offscreen: {
    width: '0%',
  },
  onscreen: {
    width: '100%',
    transition: {
      duration: 0.7,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

const WorkCard = ({
  id,
  name,
  date,
  description,
  tech,
  linkRepo,
  linkDemo,
  firstImg,
  secondImg,
}) => {
  const imgRef = useRef();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    new hoverEffect({
      parent: imgRef.current,
      intensity: 0.4,
      angle: Math.PI / 8,
      speedIn: 1.5,
      speedOut: 1.5,
      image1: firstImg,
      image2: secondImg,
      displacementImage: heightMap,
      imagesRatio: 0.5,
    });
  }, [firstImg, secondImg]);

  return (
    <StyledWorkCard
      variants={workCardVariants}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ amount: 0.4 }}
    >
      <StyledWorkNumber>
        <span /> {id}
      </StyledWorkNumber>
      <StyledWorkBody>
        <StyledWorkTitle>{name}</StyledWorkTitle>
        <StyledWorkBottomRow>
          <StyledLeftRow>
            <StyledWorkDescription>{description}</StyledWorkDescription>
            <StyledWorkTech>
              <span>tech featured</span>
              <ul>
                {tech.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </StyledWorkTech>
            <StyledWorkLinks>
              <motion.a
                href={linkRepo}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{
                  scale: 1.1,
                }}
              >
                <FaGithub />
                view repo
              </motion.a>
              <motion.a
                href={linkDemo}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{
                  scale: 1.1,
                }}
              >
                <FaExternalLinkSquareAlt />
                view demo
              </motion.a>
            </StyledWorkLinks>
          </StyledLeftRow>
          <StyledWorkImgLink
            href={linkDemo}
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledWorkImgConteiner
              ref={imgRef}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? <p>click to explore app 🧐</p> : <p>{date}</p>}
            </StyledWorkImgConteiner>
          </StyledWorkImgLink>
        </StyledWorkBottomRow>
      </StyledWorkBody>
      <StyledWorkLine
        variants={workLineVariants}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.01 }}
      />
    </StyledWorkCard>
  );
};

export default WorkCard;
