import React from 'react';
import styled from 'styled-components';

import { media } from '../commons/theme';

import Icon from './Icon';

const ImageZoomModal = ({ src, onClose }) => (
  <Expandable>
    <button onClick={onClose}>
      <Icon name="close" size={0.875} color="red" noPadding />
    </button>
    <img src={src} />
  </Expandable>
);

const Expandable = styled.div`
  position: fixed;
  z-index: 10000;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  padding: 2rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    box-shadow: ${props => props.theme.shadow.regular};
    object-fit: cover;
  }

  button {
    position: absolute;
    z-index: 2;
    top: 1.25rem;
    right: 1.25rem;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem 0;
    font-size: 1.25rem;
    line-height: 1;
    text-align: center;
    background: ${props => props.theme.color.white};
    border: 0.1rem solid ${props => props.theme.color.red};
    box-shadow: ${props => props.theme.shadow.regular};
    border-radius: 4rem;
    transition: 0.25s ease all;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;

    &:hover {
      background: ${props => props.theme.color.red};
      border-color: ${props => props.theme.color.white};
      transition: 0.25s ease all;

      & > div {
        & > span {
          color: ${props => props.theme.color.white};
        }
      }
    }
  }
`;

export default ImageZoomModal;
