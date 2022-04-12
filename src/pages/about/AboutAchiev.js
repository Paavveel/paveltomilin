import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';
import Marquee from 'react-fast-marquee';
import { achievements } from '../../data';
import { useMousePosition } from '../../hooks/useMousePosition';

const StyledAboutAchive = styled.div`
  padding: 5rem 0;

  @media ${media.small} {
    padding: 5.5rem 0;
  }
`;
const StyledAchiveContainer = styled(motion.div)`
  min-height: 100vh;
  padding: 10rem 5%;
  display: flex;
  justify-content: flex-end;

  @media ${media.small} {
    padding: 11rem 5%;
  }

  div.floating-img {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    height: 50vh;
    z-index: 99;
    box-shadow: rgb(0 0 0 / 10%) 5px 5px 15px 5px;
    overflow: hidden;

    img {
      width: auto;
      height: 100%;
    }
  }
`;
const StyledAchiveInner = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 1.5vmax;
    font-weight: 400;
    line-height: 120%;
    word-spacing: 5px;
    margin: 1vw 0px;
    padding: 1vw 0px;

    @media ${media.medium} {
      font-size: 17px;
    }
  }

  @media ${media.small} {
    justify-content: flex-start;
    width: 100%;
  }
`;

const StyledAchive = styled.div`
  display: flex;
  justify-content: space-between;

  p:nth-child(1) {
    width: 70%;
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

const AboutAchiev = () => {
  const { x, y } = useMousePosition();
  const [currentImg, setCurrentImg] = useState('');
  const [hoverState, setHoverState] = useState(false);

  const hoverImg = imgUrl => {
    setCurrentImg(imgUrl);
    setHoverState(true);
  };

  const unHoverImg = () => {
    setCurrentImg('');
    setHoverState(false);
  };
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
          {achievements.map(({ id, title, date, imgUrl }) => (
            <StyledAchive key={id}>
              <motion.p
                onMouseEnter={() => hoverImg(imgUrl)}
                onMouseLeave={unHoverImg}
              >
                {title}
              </motion.p>
              <p>{date}</p>
            </StyledAchive>
          ))}
        </StyledAchiveInner>
        <motion.div
          className='floating-img'
          initial={{ opacity: 0 }}
          animate={{
            opacity: hoverState ? 1 : 0,
            x: x,
            y: y,
          }}
          transition={{ duration: 0.3, ease: 'linear' }}
        >
          <img src={currentImg} alt='' />
        </motion.div>
      </StyledAchiveContainer>
    </StyledAboutAchive>
  );
};

export default AboutAchiev;
