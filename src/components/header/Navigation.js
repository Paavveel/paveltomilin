import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { color } from '../../styles/GlobalStyles';

const Nav = styled(motion.nav)`
  background: rgba(119, 44, 232, 0.5);
  width: max-content;
  padding: 0.7rem 1.7rem;
  z-index: 9999;
  position: fixed;
  left: 50%;
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);

  a {
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    color: ${color.white};
    font-size: 1.1rem;
  }

  a:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  a.active {
    background: rgba(0, 0, 0, 0.3);
  }
`;

function Navigation() {
  return (
    <Nav
      initial={{ opacity: 0, y: 180, x: '-50%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
    >
      <NavLink to='/'>
        <AiOutlineHome />
      </NavLink>
      <NavLink to='about'>
        <AiOutlineUser />
      </NavLink>
      <NavLink to='work'>
        <BiBook />
      </NavLink>
      <NavLink to='services'>
        <RiServiceLine />
      </NavLink>
      <NavLink to='contact'>
        <BiMessageSquareDetail />
      </NavLink>
    </Nav>
  );
}

export default Navigation;
