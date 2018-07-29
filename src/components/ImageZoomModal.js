import React from 'react';
import styled from 'styled-components';

const ImageZoomModal = ({ src, onClose }) => (
  <Expandable>
    <button onClick={onClose}>X</button>
    <img src={src} />
  </Expandable>
);

const Expandable = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;

  img {
    width: 100%;
    height: 100%;
    border: 0.25rem solid ${props => props.theme.color.white};
    object-fit: cover;
  }

  button {
    position: absolute;
    z-index: 2;
    top: 1rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem 0;
    font-size: 1.25rem;
    line-height: 1;
    text-align: center;
    color: ${props => props.theme.color.dark};
    background: ${props => props.theme.color.white};
    border: 0.25rem solid ${props => props.theme.color.dark};
    border-radius: 4rem;
    transition: 0.25s ease all;

    &:hover {
      color: ${props => props.theme.color.white};
      background: ${props => props.theme.color.red};
      border-color: ${props => props.theme.color.white};
      transition: 0.25s ease all;
    }
  }
`;

export default ImageZoomModal;
