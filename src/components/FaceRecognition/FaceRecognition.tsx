import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../ImageLinkForm/ImageLinkForm';
import Box from '../models/Box';

const Wrap = styled(Wrapper)`
  padding: 0;
  margin-top: 190px;
`;
const ImageView = styled.img`
  height: 55vh;
`;
export const ReconditionedFaceBox = styled.div<{ box: Box }>`
  position: absolute;
  box-shadow: 0 0 0 3px #ffd849 inset;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
  top: ${({ box }) => box.topRow + 'px'};
  right: ${({ box }) => box.rightCol + 'px'};
  bottom: ${({ box }) => box.bottomRow + 'px'};
  left: ${({ box }) => box.leftCol + 'px'};
`;

type Props = {
  imageURL: string;
  box: Box;
};

export const FaceRecognition = ({ imageURL, box }: Props): JSX.Element => {
  return (
    <Wrap>
      <ImageView id="image" src={imageURL} alt="" />
      <ReconditionedFaceBox box={box}></ReconditionedFaceBox>
    </Wrap>
  );
};
