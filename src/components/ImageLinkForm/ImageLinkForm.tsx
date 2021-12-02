import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import User from '../models/User';
import { Rank } from '../Rank/Rank';

const InputBtnWrap = styled.div`
  display: flex;
`;
const UserRank = styled.p`
  z-index: 3;
`;
export const Wrapper = styled.div`
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
type Props = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPictureSubmit: () => void;
  user: User;
};
export const ImageLinkForm = ({
  handleInputChange,
  onPictureSubmit,
  user,
}: Props): JSX.Element => {
  return (
    <Wrapper>
      <Rank name={user.name} entries={user.entries} />
      <UserRank>{`Load the image and I will find faces there. Let's try!`}</UserRank>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onPictureSubmit();
        }}
      >
        <InputBtnWrap>
          <Input type={'text'} handleInputChange={handleInputChange} />
          <Button disabled={false} text={'Detect'} />
        </InputBtnWrap>
      </form>
    </Wrapper>
  );
};
