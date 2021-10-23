import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

const ImageLinkFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: fit-content;
  padding: 1% 3% 3%;
  background-color: #42424214;
  border-radius: 10px;
`;

const InputBtnWrap = styled.div`
  display: flex;
`;

export const ImageLinkForm = (): JSX.Element => {
  return (
    <ImageLinkFormWrap>
      <p>{`Load the image and I will find faces there. Let's try!`}</p>
      <InputBtnWrap>
        <Input type={'text'} />
        <Button disabled={false} text={'Detect'} />
      </InputBtnWrap>
    </ImageLinkFormWrap>
  );
};
