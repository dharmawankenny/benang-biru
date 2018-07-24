import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoWhiteImage from '../assets/logo-white.png';
import FooterBgImage from '../assets/footer-bg.jpg';

import { media } from '../commons/theme';

import { SITEMAP } from '../routes';

const Footer = () => (
  <Foot>
    <Bg src={FooterBgImage} />
    <Container>
      <Section flex={3}>
        <Link to={SITEMAP.index}>
          <Logo src={LogoWhiteImage} />
        </Link>
        <p>
          A suspendisse condimentum diam ac sagittis scelerisque sagittis phasellus velit metus vitae nostra vitae ante facilisi sodales et curae.Dis est natoque lobortis neque a.
          <br />
          <br />
          Caringin, Bandung.
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
      <Section flex={4}>
        <Link to={SITEMAP.index}>
          <Logo src={LogoWhiteImage} />
        </Link>
        <p>
          A suspendisse condimentum diam ac sagittis scelerisque sagittis phasellus velit metus vitae nostra vitae ante facilisi sodales et curae.Dis est natoque lobortis neque a.
          <br />
          Caringin, Bandung.
        </p>
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

  ${media('mobile')} {
    padding: 2rem;
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

  p {
    font-size: 1rem;
    line-height: 1.4;
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
  }
`;

export default Footer;
