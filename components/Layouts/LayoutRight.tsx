import React from 'react';
import styled from '@emotion/styled';

const Layout = styled.div`
  width: 35rem;
  height: 100vh;
  padding: 1%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: scroll;

  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 100%;
    height: 100%;
    padding: 1.2rem 1rem 2rem 1rem;
    overflow-y: inherit;
  }
`;

const LayoutLeft = (props: any) => {
  return <Layout>{props.children}</Layout>;
};

export default LayoutLeft;
