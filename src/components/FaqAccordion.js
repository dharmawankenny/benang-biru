import React from 'react';
import styled from 'styled-components';

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
          <span>+</span>
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
`;

const Toggler = styled.button`
  width: 100%;
  cursor: pointer;
  background: ${props => props.theme.color.blue};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 1rem 2rem;

  p,
  span {
    font-size: 1.25rem;
    line-height: 1;
    text-align: left;
    color: ${props => props.theme.color.white};
  }

  p {
    flex: 1;
  }

  span {
    font-size: 2rem;
    transform: rotate(${props => props.active ? '45deg' : '0deg'});
    transition: 0.25s ease transform;
  }
`;

const Content = styled.div`
  width: 100%;
  max-height: ${props => props.show ? '20rem' : 0};
  transition: 0.25s ease max-height;
  background: ${props => props.theme.color.white};
  overflow: hidden;

  p {
    padding: 2rem;
    width: 100%;
    font-size: 1rem;
    line-height: 1.4;
    text-align: left;
    color: ${props => props.theme.color.dark};
  }
`;
