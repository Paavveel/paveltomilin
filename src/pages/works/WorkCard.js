import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';
import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa';

const StyledWorkCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 5vh 0;

  @media ${media.small} {
    gap: 5rem;
  }
  @media ${media.xsmall} {
    gap: 4rem;
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
    background: ${props => props.theme.text};
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

  @media ${media.small} {
  }
  @media ${media.xsmall} {
  }
`;

const StyledWorkTitle = styled.p`
  display: flex;
  gap: 5rem;
  font-size: 8.9vmax;
  line-height: 1;

  @media ${media.small} {
  }
  @media ${media.xsmall} {
  }
`;
const StyledWorkDescription = styled.p`
  font-size: 17px;
  text-align: justify;
  font-weight: 300;
  @media ${media.small} {
  }
  @media ${media.xsmall} {
  }
`;
const StyledWorkTech = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 17px;

  span {
    font-size: 18.5px;
    text-transform: uppercase;
  }

  ul {
    font-weight: 300;
  }

  @media ${media.small} {
  }
  @media ${media.xsmall} {
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
    color: ${props => props.theme.text};

    svg {
      font-size: 30px;
    }
  }

  @media ${media.small} {
  }
  @media ${media.xsmall} {
  }
`;
const StyledWorkBottomRow = styled.div`
  display: flex;
  gap: 25px;

  @media ${media.small} {
    flex-direction: column-reverse;
  }
  @media ${media.xsmall} {
  }
`;
const StyledLeftRow = styled.div`
  display: flex;
  flex-direction: column;

  gap: 35px;

  @media ${media.small} {
  }
  @media ${media.xsmall} {
  }
`;

const StyledWorkImg = styled.img`
  width: 50%;
  height: 100%;
  @media ${media.small} {
    width: 100%;
  }
  @media ${media.xsmall} {
  }
`;
const StyledWorkLine = styled.div`
  width: 100%;
  height: 5px;
  background: ${props => props.theme.text};
  @media ${media.small} {
  }
  @media ${media.xsmall} {
  }
`;

const WorkCard = ({
  id,
  name,
  description,
  tech,
  linkRepo,
  linkDemo,
  imgLink,
}) => {
  return (
    <StyledWorkCard>
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
                whileHover={{
                  scale: 1.1,
                }}
              >
                <FaGithub />
                viev repo
              </motion.a>
              <motion.a
                href={linkDemo}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <FaExternalLinkSquareAlt />
                viev demo
              </motion.a>
            </StyledWorkLinks>
          </StyledLeftRow>
          <StyledWorkImg src={imgLink} />
        </StyledWorkBottomRow>
      </StyledWorkBody>
      <StyledWorkLine />
    </StyledWorkCard>
  );
};

export default WorkCard;
