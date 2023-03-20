import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ButtonBack = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  background: transparent;
  width: 40px;
  height: 34px;
  border: 3px solid ${(props) => props.theme.colors.text};
  transition: background 0.3s;

  &::hover {
    background: ${(props) => props.theme.colors.container};
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;
  overflow-y: auto;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.background};
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: auto;
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.container};
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 40px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
  }
`;
