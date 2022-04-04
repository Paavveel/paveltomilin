import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
  position: relative;
  overflow: hidden;
`;

const Layout = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;
