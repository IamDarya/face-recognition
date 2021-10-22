import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
const Link = styled.p`
  font-size: 1.5rem;
  text-decoration: underline;
  color: #424242;
  &:hover {
    color: grey;
  }
`;

export const Navigation = (): JSX.Element => {
  return (
    <Nav>
      <Link>Sign Out</Link>
    </Nav>
  );
};
