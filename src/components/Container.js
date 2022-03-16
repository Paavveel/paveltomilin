import React from 'react';
import { media } from '../styles/GlobalStyles';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  padding-top: 100px;

  @media ${media.medium} {
    width: 86%;
  }
  @media ${media.small} {
    width: 90%;
    padding-top: 85px;
  }
`;

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
