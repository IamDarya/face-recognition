import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import LogoPNG from '../../assets/logo.png';

const TiltWrapper = styled.div`
  width: 100px;
`;

const LogoImg = styled.div`
  background-image: url(${LogoPNG});
  background-size: contain;
  height: 100px;
  background-repeat: no-repeat;
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
