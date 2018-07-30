import React from 'react';
import styled from 'styled-components';

const Icon = props => (
  <Wrapper {...props}>
    <span className={`icon-${props.name}`} />
  </Wrapper>
);

const Wrapper = styled.div`
  width: ${props => props.noPadding ? props.size ? `${props.size * 1}rem` : '1rem' : props.size ? `${props.size * 2}rem` : '2rem'};
  height: ${props => props.noPadding ? props.size ? `${props.size * 1}rem` : '1rem' : props.size ? `${props.size * 2}rem` : '2rem'};
  color: ${props => props.color ? props.theme.color[props.color] : props.theme.color.blue};
  background: ${props => props.background ? props.theme.color[props.background] : 'none'};
  border-radius: ${props => props.background ? '100%' : 'none'};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  span {
    color: !inherit;
    font-size: ${props => props.size ? `${props.size * 1}rem` : '1rem'};
    line-height: 1;
    margin: 0;
  }
`;

export default Icon;
