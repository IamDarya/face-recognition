import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Logo/Logo';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 5%;
`;
const Link = styled.p`
  font-size: 1.5rem;
  color: #424242;
  z-index: 1;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Navigation = (): JSX.Element => {
  return (
    <Nav>
      <Logo />
      <Link>Sign Out</Link>
    </Nav>
  );
};
