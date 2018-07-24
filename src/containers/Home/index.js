import React from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';

import { media } from '../../commons/theme';

import AuthState from '../../states/AuthState';

export default class Home extends React.Component {
  render() {
    return (
      <Subscribe to={[AuthState]}>
        {authState => (
          <Wrapper>
            {!authState.state.authenticated && <h1>Hello World</h1>}
            {!authState.state.authenticated && <Action onClick={authState.login}>Login!</Action>}
            {authState.state.authenticated && <h1>{authState.state.token}</h1>}
          </Wrapper>
        )}
      </Subscribe>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  margin: 0 auto;
  padding: 0 0 5rem;

  ${media('smallDesktop')} {
    padding: 0 2rem 5rem;
  }
`;

const Action = styled.button`
  padding: 0.75rem 1.5rem;
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.dark};
  margin: 1rem 0 0;
  border-radius: 0.25rem;
`;
