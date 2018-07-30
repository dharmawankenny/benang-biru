import React from 'react';
import styled from 'styled-components';

import { media } from '../commons/theme';

import Icon from './Icon';

const ImageZoomModal = ({ src, onClose, onNext, onPrev, captionText = null }) => (
  <Expandable>
    <button onClick={onClose}>
      <Icon name="close" size={0.875} color="red" noPadding />
    </button>
    <img src={src} />
    <ExpandableNavigator>
      <button onClick={onNext}>
        <Icon name="left-long" size={1} noPadding />
      </button>
      <button onClick={onPrev}>
        <Icon name="right-long" size={1} noPadding />
      </button>
    </ExpandableNavigator>
    {captionText &&
      <Caption>
        <p>{captionText}</p>
      </Caption>}
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

  & > button {
    position: absolute;
    z-index: 2;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    background: ${props => props.theme.color.white};
    border: 0.25rem solid ${props => props.theme.color.red};
    box-shadow: ${props => props.theme.shadow.regular};
    border-radius: 4rem;
    transition: 0.25s ease all;

    ${media('tablet')} {
      top: 1.25rem;
      right: 1.25rem;
      width: 2rem;
      height: 2rem;
      border-width: 0.1rem;
    }

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

const ExpandableNavigator = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  button {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    color: ${props => props.theme.color.dark};
    background: ${props => props.theme.color.white};
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    box-shadow: ${props => props.theme.shadow.regular};
    transition: 0.25s ease all;
    margin-right: 1rem;

    &:last-of-type {
      margin: 0;
    }

    &:hover {
      color: ${props => props.theme.color.white};
      background: ${props => props.theme.color.blue};
      transition: 0.25s ease all;

      & > div {
        & > span {
          color: ${props => props.theme.color.white};
          transition: 0.25s ease all;
        }
      }
    }

    & > div {
      & > span {
        transition: 0.25s ease all;
      }
    }
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  z-index: 2;
  background: rgba(255, 255, 255, 0.75);
  width: calc(100% - 4rem);
  padding: 2rem;
  border-radius: 0 0 0.5rem 0.5rem;

  p {
    font-size: 1.25rem;
    line-height: 1.4;
    text-align: left;

    ${media('tablet')} {
      font-size: 1rem;
    }
  }
`;

export default ImageZoomModal;
