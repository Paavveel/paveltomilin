import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/GlobalStyles';

const StyledImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 0;

  div:first-child {
    position: relative;
    background-attachment: fixed;
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;

    &::before {
      content: '';
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  div:last-child {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3vw;
    color: var(--white);
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    z-index: 3;
    padding: 2rem 3rem;

    @media ${media.medium} {
      font-size: 3vw;
    }
    @media ${media.small} {
      font-size: 4vw;
      padding: 2rem 3rem;
    }
    @media ${media.xsmall} {
      font-size: 5.5vw;
      padding: 2rem 1rem;
    }
  }
`;

const ParallaxImage = ({ src = '', height, children }) => {
  return (
    <StyledImageBox style={{ height: height || undefined }}>
      <div
        style={{ backgroundImage: `url(${src})`, height: height || undefined }}
      ></div>
      {Boolean(children) && <div>{children}</div>}
    </StyledImageBox>
  );
};

export default ParallaxImage;
