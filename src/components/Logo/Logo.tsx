import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import LogoPNG from '../../assets/logo.png';

const TiltWrapper = styled.div`
  width: 70px;
`;

const LogoImg = styled.div`
  background-image: url(${LogoPNG});
  background-size: contain;
  height: 70px;
  background-repeat: no-repeat;
  filter: contrast(0.7);
  &:hover {
    cursor: pointer;
  }
`;

export const Logo = (): JSX.Element => {
  return (
    <TiltWrapper>
      <Tilt tiltMaxAngleY={25} tiltMaxAngleX={25} tiltAxis={null}>
        <LogoImg />
      </Tilt>
    </TiltWrapper>
  );
};
