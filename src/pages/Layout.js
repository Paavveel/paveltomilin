import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
  position: relative;
  overflow: hidden;
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
