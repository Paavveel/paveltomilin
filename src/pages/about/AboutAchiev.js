import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';
import { achievements } from '../../data';
import { useMousePosition } from '../../hooks/useMousePosition';

const StyledAchiveContainer = styled(motion.div)`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;

  padding: 8rem 0;

  @media ${media.small} {
    padding: 3rem 0;
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
    font-size: 1.7vmax;
    font-weight: 400;
    line-height: 120%;
    word-spacing: 5px;
    margin: 1.1vw 0;
    padding: 1.1vw 0;

    @media ${media.small} {
      font-size: 1.9vmax;
      margin: 1.5vw 0;
      padding: 1.5vw 0;
    }
    @media ${media.xsmall} {
      margin: 3.5vw 0;
      padding: 3.5vw 0;
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
  );
};

export default AboutAchiev;
