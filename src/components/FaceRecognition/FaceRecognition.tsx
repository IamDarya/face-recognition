import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../ImageLinkForm/ImageLinkForm';

const Wrap = styled(Wrapper)`
  padding: 0;
  margin-top: 190px;
`;
const ImageView = styled.img`
  height: 55vh;
`;

type Props = {
  imageURL: string;
};

export const FaceRecognition = ({ imageURL }: Props): JSX.Element => {
  return (
    <Wrap>
      <ImageView id="image" src={imageURL} alt="" />
    </Wrap>
  );
};
