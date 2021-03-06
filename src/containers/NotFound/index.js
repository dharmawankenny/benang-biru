import React from 'react';
import styled from 'styled-components';

import NavigationBar from '../../components/NavigationBar';

import { media } from '../../commons/theme';

const NotFound = () => (
  <Wrapper>
    <NavigationBar />
    <h4>404, Not Found :(</h4>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  margin: 0 auto;
  padding: 0 0 5rem;

  ${media('smallDesktop')} {
    padding: 0 2rem 5rem;
  }
`;

export default NotFound;
