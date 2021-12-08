import React from 'react';
import styled from 'styled-components';

type Props = {
  type: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Inpt = styled.input`
  border: 1px solid #424242;
  border-radius: 10px 0 0 10px;
  padding: 0 5px;
  width: 25vw;
  &:focus-visible {
    outline: none;
  }
`;

export const Input = ({ type, handleInputChange }: Props): JSX.Element => {
  return (
    <Inpt
      type={type}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        handleInputChange(event)
      }
    ></Inpt>
  );
};
