import React from 'react';
import styled from 'styled-components';

const Banner = ({ src, text }) => (
  <Wrapper>
    <Bg src={src} />
    <Header>{text}</Header>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  padding: 4rem 2rem 3rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Bg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

const Header = styled.h1`
  color: ${props => props.theme.color.white};
  width: 100%;
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  font-size: 4rem;
  line-height: 1.4;
  text-align: center;
  text-transform: uppercase;
`;

export default Banner;