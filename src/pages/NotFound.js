import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../styles/GlobalStyles';

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${media.small} {
    font-size: 1.5rem;
  }
`;

function NotFound() {
  return (
    <StyledNotFound>
      <h1>NOT FOUND</h1>
      <h2>Ops, you just hit a route that doesn't exist... the sadness.</h2>
      <Link to='/'>Go to Home</Link>
    </StyledNotFound>
  );
}

export default NotFound;
