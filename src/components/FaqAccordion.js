import React from 'react';
import styled from 'styled-components';

import { media } from '../commons/theme';

import Icon from './Icon';

export default class FaqAccordion extends React.Component {
  constructor() {
    super();

    this.state = {
      showAnswer: false
    };
  }

  toggle = () => this.setState({ showAnswer: !this.state.showAnswer });

  render() {
    const { question, answer } = this.props;

    return (
      <Wrapper>
        <Toggler onClick={this.toggle} active={this.state.showAnswer}>
          <p>{question}</p>
          <Icon name="plus" size={1.5} noPadding />
        </Toggler>
        <Content show={this.state.showAnswer}>
          <p>{answer}</p>
        </Content>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  box-shadow: ${props => props.theme.shadow.regular};
`;

const Toggler = styled.button`
  width: 100%;
  cursor: pointer;
  background: ${props => props.theme.color.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 1rem 2rem;

  ${media('tablet')} {
    padding: 1rem 1.5rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
    text-align: left;
    color: ${props => props.theme.color.blue};
    flex: 1;

    ${media('tablet')} {
      font-size: 1rem;
    }
  }

  & > div {
    transform: rotate(${props => props.active ? '45deg' : '0deg'});
    transition: 0.25s ease transform;

    & > span {
      ${media('tablet')} {
        font-size: 0.875rem;
      }
    }
  }
`;

const Content = styled.div`
  width: 100%;
  max-height: ${props => props.show ? '20rem' : 0};
  transition: 0.25s ease max-height;
  background: ${props => props.theme.color.white};
  overflow: hidden;

  p {
    padding: 1rem 2rem 2rem;
    width: 100%;
    font-size: 1rem;
    line-height: 1.4;
    text-align: left;
    color: ${props => props.theme.color.dark};

    ${media('tablet')} {
      font-size: 0.875rem;
      padding: 0 1.5rem 1.5rem;
    }
  }
`;
