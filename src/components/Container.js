import React from 'react';
import { media, container } from '../styles/GlobalStyles';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: ${container.largeWidth};
  margin: 0 auto;
  padding-top: 156px;

  @media ${media.medium} {
    width: ${container.mediumWidth};
  }
  @media ${media.small} {
    width: ${container.smallWidth};
    padding-top: 72px;
  }
`;

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
