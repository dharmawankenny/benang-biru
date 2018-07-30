import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoWhiteImage from '../assets/logo-white.png';
import FooterBgImage from '../assets/footer-bg.jpg';

import { media } from '../commons/theme';

import Icon from '../components/Icon';

import { SITEMAP } from '../routes';

const Footer = () => (
  <Foot>
    <Bg src={FooterBgImage} />
    <Container>
      <Section flex={4}>
        <Link to={SITEMAP.index}>
          <Logo src={LogoWhiteImage} />
        </Link>
        <p>
          © PT SATRIA GARMINDO NUSANTARA
          <br />
          Gedung Pool Bis Primajasa, Lantai 2
          <br />
          Jl. Soekarno Hatta 181, Caringin, Bandung, Jawa Barat 40223 
        </p>
      </Section>
      <Section flex={2} centerPiece>
        <h4>LAYANAN KAMI</h4>
        <p>
          - lorem
          <br />
          - ipsum
          <br />
          - dolor
          <br />
          - Sit Amet
          <br />
        </p>
      </Section>
      <Section flex={2}>
        <a className="external" href="tel:+62833322221111" target="_blank">
          <Icon name="phone" size={1} background="blue" color="white" />
          <span>+62833322221111</span>
        </a>
        <a className="external" href="https://www.instagram.com/benangbirubdg/" target="_blank">
          <Icon name="facebook" size={1} background="blue" color="white" />
          <span>Benang Biru Bandung</span>
        </a>
        <a className="external" href="https://www.instagram.com/benangbirubdg/" target="_blank">
          <Icon name="instagram" size={1} background="blue" color="white" />
          <span>@BenangBiruBdg</span>
        </a>
      </Section>
    </Container>
  </Foot>
);

const Foot = styled.footer`
  width: 100%;
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
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: stretch;

  ${media('tablet')} {
    padding: 4rem 2rem;
  }
`;

const Logo = styled.img`
  width: 12.5rem;
  margin-bottom: 1rem;
`;

const Section = styled.div`
  flex: ${props => props.flex};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  border-left: ${props => props.centerPiece ? `0.15rem solid ${props.theme.color.white}` : 'none'};
  border-right: ${props => props.centerPiece ? `0.15rem solid ${props.theme.color.white}` : 'none'};
  padding: ${props => props.centerPiece ? '1rem 2rem' : '0'};
  margin: ${props => props.centerPiece ? '0 2rem' : '0'};

  ${media('tablet')} {
    justify-content: center;
    flex: none;
    width: 100%;
    border: none;
    border-top: ${props => props.centerPiece ? `0.15rem solid ${props.theme.color.white}` : 'none'};
    border-bottom: ${props => props.centerPiece ? `0.15rem solid ${props.theme.color.white}` : 'none'};
    padding: ${props => props.centerPiece ? '2rem 0' : '0'};
    margin: ${props => props.centerPiece ? '2rem 0' : '0'};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: normal;
    color: ${props => props.theme.color.white};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 100%;
    margin: 0 0 1rem;

    ${media('tablet')} {
      text-align: center;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.4;

    ${media('tablet')} {
      width: 100%;
      text-align: center;
    }
  }

  a.external {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-decoration: none;
    color: ${props => props.theme.color.white};
    margin: 0 0 1rem;

    &:hover {
      & > div {
        background: ${props => props.theme.color.white};
        transition: 0.25s ease all;

        span {
          color: ${props => props.theme.color.blue};
          transition: 0.25s ease all;
        }
      }
    }

    &:last-of-type {
      margin: 0;
    }

    & > span {
      flex: 1;
      margin-left: 0.5rem;
      font-size: 1.125rem;
      line-height: 1;

      ${media('tablet')} {
        flex: none;
      }
    }

    & > div {
      transition: 0.25s ease all;

      span {
        transition: 0.25s ease all;
      }
    }
  }
`;

export default Footer;
