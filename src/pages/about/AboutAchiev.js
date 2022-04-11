import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';
import Marquee from 'react-fast-marquee';
import { achievements } from '../../data';
import { useMousePosition } from '../../hooks/useMousePosition';

// Components
import Achiev from './Achiev';

const StyledAboutAchive = styled.div`
  /* position: relative; */
  padding: 5rem 0;
  min-height: 100vh;

  @media ${media.small} {
    padding: 5.5rem 0;
  }
`;
const StyledAchiveContainer = styled.div`
  /* position: relative; */
  width: 90%;
  margin: 0 auto;
  padding: 10rem 0;
  display: flex;
  justify-content: flex-end;

  @media ${media.small} {
    padding: 11rem 0;
  }

  div.img {
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
  justify-content: space-between;

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
    width: 100%;
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
  const [currentImg, setCurrnetImg] = useState('');
  const [hoverState, setHoverState] = useState(false);

  const changeImg = id => {
    if (id) {
      const obj = achievements.find(item => item.id === id);
      setCurrnetImg(obj.img);
    } else {
      setCurrnetImg('');
    }
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
          {achievements.map((item, i) => (
            <Achiev
              key={i}
              {...item}
              x={x}
              y={y}
              changeImg={changeImg}
              setHoverState={setHoverState}
            />
          ))}
        </StyledAchiveInner>
        <motion.div
          className='img'
          initial={{ opacity: 0 }}
          animate={{
            opacity: hoverState ? 1 : 0,
            x: x,
            y: y,
          }}
          transition={{ ease: 'linear' }}
        >
          <img src={currentImg} alt='' />
        </motion.div>
      </StyledAchiveContainer>
    </StyledAboutAchive>
  );
};

export default AboutAchiev;
