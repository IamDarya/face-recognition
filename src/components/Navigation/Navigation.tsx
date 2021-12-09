import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Logo/Logo';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const IfSignOut = styled.div`
  display: flex;
  gap: 30px;
`;
const NavigSigns = styled.p`
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
  isSignIn: boolean;
};

export const Navigation = ({ onRouteChange, isSignIn }: Props): JSX.Element => {
  return (
    <>
      <Nav>
        <Logo />
        {isSignIn ? (
          <NavigSigns onClick={() => onRouteChange('signOut')}>
            Sign Out
          </NavigSigns>
        ) : (
          <IfSignOut>
            <NavigSigns onClick={() => onRouteChange('signIn')}>
              Sign In
            </NavigSigns>
            <NavigSigns onClick={() => onRouteChange('register')}>
              Register
            </NavigSigns>
          </IfSignOut>
        )}
      </Nav>
    </>
  );
};
