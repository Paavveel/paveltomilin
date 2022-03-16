import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../components/Container';
import styled from 'styled-components';

const Main = styled.main`
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

function Layout() {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;
