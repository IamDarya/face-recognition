import React from 'react';
import styled from 'styled-components';

type Props = {
  type: string;
};

const Inpt = styled.input`
  border: 1px solid #424242;
  border-radius: 10px 0 0 10px;
  padding: 0 5px;
  &:focus-visible {
    outline: none;
  }
`;

export const Input = ({ type }: Props): JSX.Element => {
  return <Inpt type={type}></Inpt>;
};
