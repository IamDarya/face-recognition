import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Logo/Logo';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const SignOut = styled.p`
  font-size: 1.5rem;
  color: #424242;
  z-index: 1;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
type Props = {
  onRouteChange: (route: string) => void;
};

export const Navigation = ({ onRouteChange }: Props): JSX.Element => {
  return (
    <Nav>
      <Logo />
      <SignOut onClick={() => onRouteChange('signIn')}>Sign Out</SignOut>
    </Nav>
  );
};
