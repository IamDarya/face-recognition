import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import LogoPNG from '../../assets/logo.png';

const TiltWrapper = styled.div`
  height: 150px;
  margin: 10px;
  width: 150px;
`;

const LogoImg = styled.div`
  background-image: url(${LogoPNG});
  height: 150px;
  background-size: contain;
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
