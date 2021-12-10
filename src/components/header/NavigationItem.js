import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavTitle = styled.span`
  color: ${(props) => props.theme.text};
`;

function NavigationItem({ title, emoji }) {
  const isHome = title === 'home';
  return (
    <motion.li>
      <Link to={isHome ? '/' : `${title}`}>
        <span>{emoji}</span>
        <NavTitle>{title}</NavTitle>
      </Link>
    </motion.li>
  );
}

export default NavigationItem;
