import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Rank } from '../Rank/Rank';

const InputBtnWrap = styled.div`
  display: flex;
`;
const UserRank = styled.p`
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  padding: 1% 3% 3%;
  background-color: white;
  z-index: 3;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const ImageLinkForm = (): JSX.Element => {
  return (
    <Wrapper>
      <Rank />
      <UserRank>{`Load the image and I will find faces there. Let's try!`}</UserRank>
      <form>
        <InputBtnWrap>
          <Input type={'text'} />
          <Button disabled={false} text={'Detect'} />
        </InputBtnWrap>
      </form>
    </Wrapper>
  );
};
