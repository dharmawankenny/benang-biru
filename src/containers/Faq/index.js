import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';

import FaqHeaderBgImg from '../../assets/faq-header-bg.jpg';
import LogoFaceImage from '../../assets/logoface.png';

import { media } from '../../commons/theme';

import Banner from '../../components/Banner';
import FaqAccordion from '../../components/FaqAccordion';
import NavigationBar from '../../components/NavigationBar';

export default class Faq extends React.Component {
  static QNA = [
    {
      question: 'Lorem Ipsum Dolor Sit Amet?',
      answer: 'Convallis platea mus semper rutrum rhoncus nisl tempor a duis vel curabitur a platea condimentum nostra potenti adipiscing lectus ut.Sed litora egestas a per ut eget donec ut fames vestibulum cursus interdum est scelerisque diam dictumst parturient est.Convallis tortor leo faucibus hac at a facilisi a semper hac.',
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet?',
      answer: 'Convallis platea mus semper rutrum rhoncus nisl tempor a duis vel curabitur a platea condimentum nostra potenti adipiscing lectus ut.Sed litora egestas a per ut eget donec ut fames vestibulum cursus interdum est scelerisque diam dictumst parturient est.Convallis tortor leo faucibus hac at a facilisi a semper hac.',
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet?',
      answer: 'Convallis platea mus semper rutrum rhoncus nisl tempor a duis vel curabitur a platea condimentum nostra potenti adipiscing lectus ut.Sed litora egestas a per ut eget donec ut fames vestibulum cursus interdum est scelerisque diam dictumst parturient est.Convallis tortor leo faucibus hac at a facilisi a semper hac.',
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet?',
      answer: 'Convallis platea mus semper rutrum rhoncus nisl tempor a duis vel curabitur a platea condimentum nostra potenti adipiscing lectus ut.Sed litora egestas a per ut eget donec ut fames vestibulum cursus interdum est scelerisque diam dictumst parturient est.Convallis tortor leo faucibus hac at a facilisi a semper hac.',
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet?',
      answer: 'Convallis platea mus semper rutrum rhoncus nisl tempor a duis vel curabitur a platea condimentum nostra potenti adipiscing lectus ut.Sed litora egestas a per ut eget donec ut fames vestibulum cursus interdum est scelerisque diam dictumst parturient est.Convallis tortor leo faucibus hac at a facilisi a semper hac.',
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet?',
      answer: 'Convallis platea mus semper rutrum rhoncus nisl tempor a duis vel curabitur a platea condimentum nostra potenti adipiscing lectus ut.Sed litora egestas a per ut eget donec ut fames vestibulum cursus interdum est scelerisque diam dictumst parturient est.Convallis tortor leo faucibus hac at a facilisi a semper hac.',
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet?',
      answer: 'Convallis platea mus semper rutrum rhoncus nisl tempor a duis vel curabitur a platea condimentum nostra potenti adipiscing lectus ut.Sed litora egestas a per ut eget donec ut fames vestibulum cursus interdum est scelerisque diam dictumst parturient est.Convallis tortor leo faucibus hac at a facilisi a semper hac.',
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet?',
      answer: 'Convallis platea mus semper rutrum rhoncus nisl tempor a duis vel curabitur a platea condimentum nostra potenti adipiscing lectus ut.Sed litora egestas a per ut eget donec ut fames vestibulum cursus interdum est scelerisque diam dictumst parturient est.Convallis tortor leo faucibus hac at a facilisi a semper hac.',
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet?',
      answer: 'Convallis platea mus semper rutrum rhoncus nisl tempor a duis vel curabitur a platea condimentum nostra potenti adipiscing lectus ut.Sed litora egestas a per ut eget donec ut fames vestibulum cursus interdum est scelerisque diam dictumst parturient est.Convallis tortor leo faucibus hac at a facilisi a semper hac.',
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet?',
      answer: 'Convallis platea mus semper rutrum rhoncus nisl tempor a duis vel curabitur a platea condimentum nostra potenti adipiscing lectus ut.Sed litora egestas a per ut eget donec ut fames vestibulum cursus interdum est scelerisque diam dictumst parturient est.Convallis tortor leo faucibus hac at a facilisi a semper hac.',
    },
  ];

  render() {
    return (
      <Wrapper>
        <Headroom>
          <NavigationBar />
        </Headroom>
        <Banner src={FaqHeaderBgImg} text="FAQ" />
        <Content>
          <Decoration src={LogoFaceImage} />
          <Container>
            {Faq.QNA.map(qna => <FaqAccordion {...qna} />)}
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
`;

const Content = styled.div`
  width: 100%;
  padding: 6rem 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  overflow: hidden;

  ${media('tablet')} {
    padding: 4rem 2rem;
  }
`;

const Decoration = styled.img`
  position: absolute;
  top: 8rem;
  right: -8rem;
  z-index: -1;
  width: 48rem;
  opacity: 0.05;

  ${media('tablet')} {
    top: 16rem;
    right: -30rem;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;

  & > div {
    margin: 0 0 2rem;

    &:last-of-type {
      margin: 0;
    }
  }
`;
