import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  disabled: boolean;
};

const Btn = styled.button<{ disabled: boolean }>`
  padding: 15px;
  background-color: #4671c6;
  border-radius: 0px 10px 10px 0px;
  border: none;
  font-size: 1.2rem;
  color: white;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    text-decoration: ${({ disabled }) => (disabled ? 'none' : 'underline')};
  }
`;

export const Button = ({ text, disabled }: Props): JSX.Element => {
  return <Btn disabled={disabled}>{text}</Btn>;
};
