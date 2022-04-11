import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';

const StyledAchive = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: space-between;

  p:nth-child(1) {
    width: 70%;
  }

  div {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    height: 50vh;
    z-index: 99;
    box-shadow: rgb(0 0 0 / 10%) 5px 5px 15px 5px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
const Achiev = ({ title, date, img, id, changeImg, setHoverState, x, y }) => {
  return (
    <StyledAchive>
      <motion.p
        onHoverStart={() => {
          changeImg(id);
          setHoverState(true);
        }}
        onHoverEnd={() => {
          changeImg('');
          setHoverState(false);
        }}
      >
        {title}
      </motion.p>
      <p>{date}</p>
      {/* <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: hoverState ? 1 : 0,
          x: x,
          y: y,
        }}
        transition={{ ease: 'linear' }}
      >
        <img src={img} alt={title} />
      </motion.div> */}
    </StyledAchive>
  );
};

export default Achiev;
