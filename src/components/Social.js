import React from 'react';
import styled from 'styled-components';
import { media, container, color } from '../styles/GlobalStyles';
import { motion } from 'framer-motion';

const StyledSocial = styled.div`
  position: absolute;
  left: 2rem;
  bottom: 7rem;
  display: flex;
  flex-direction: column;
`;

const Social = () => {
  return <StyledSocial>Social</StyledSocial>;
};

export default Social;
