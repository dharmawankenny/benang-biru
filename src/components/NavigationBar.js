import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoImage from '../assets/logo.png';
import LogoWhiteImage from '../assets/logo-white.png';

import { media } from '../commons/theme';

import { SITEMAP } from '../routes';

const NavigationBar = ({ transparent }) => (
  <Nav transparent={transparent}>
    <Container>
      <Link to={SITEMAP.index}>
        <Logo src={transparent ? LogoWhiteImage : LogoImage} />
      </Link>
      <NavLinks transparent={transparent}>
        <NavLink to={SITEMAP.about}>
          Tentang Kami
        </NavLink>
        <NavLink to={SITEMAP.product}>
          Informasi Produk
        </NavLink>
        <NavLink to={SITEMAP.faq}>
          FAQ
        </NavLink>
        <NavLink to={SITEMAP.gallery}>
          Galeri
        </NavLink>
        <NavLink to={SITEMAP.order}>
          Pemesanan
        </NavLink>
      </NavLinks>
    </Container>
  </Nav>
);

const Nav = styled.nav`
  width: 100%;
  background: ${props => props.transparent ? 'none' : props.theme.color.white};
  transition: 0.25s ease all;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;

  ${media('mobile')} {
    padding: 2rem;
  }
`;

const Logo = styled.img`
  height: 5rem;
  margin-right: 5rem;
  transition: 0.25s ease all;
`;

const NavLinks = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;

  a {
    color: ${props => props.transparent ? props.theme.color.white : props.theme.color.dark};
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  color: !inherit;
  line-height: 1;
  margin-left: 1.25rem;

  &:first-of-type {
    margin: 0;
  }
`;

export default NavigationBar;
