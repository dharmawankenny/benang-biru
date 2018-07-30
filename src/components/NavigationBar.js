import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoImage from '../assets/logo.png';
import LogoWhiteImage from '../assets/logo-white.png';

import { media } from '../commons/theme';

import { SITEMAP } from '../routes';

import Icon from './Icon';

export default class NavigationBar extends React.Component {
  constructor() {
    super();

    this.state = {
      showMobileNav: false,
    };
  }

  render() {
    const { transparent } = this.props;

    return (
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
          <MobileToggler onClick={() => this.setState({ showMobileNav: true })}>
            <Icon name="menu" size={1.5} noPadding />
          </MobileToggler>
          <MobileNavLinks show={this.state.showMobileNav}>
            <button onClick={() => this.setState({ showMobileNav: false })}>
              <Icon name="close" size={1} color="white" noPadding />
            </button>
            <MobileNavLink to={SITEMAP.about}>
              Tentang Kami
            </MobileNavLink>
            <MobileNavLink to={SITEMAP.product}>
              Informasi Produk
            </MobileNavLink>
            <MobileNavLink to={SITEMAP.faq}>
              FAQ
            </MobileNavLink>
            <MobileNavLink to={SITEMAP.gallery}>
              Galeri
            </MobileNavLink>
            <MobileNavLink to={SITEMAP.order}>
              Pemesanan
            </MobileNavLink>
          </MobileNavLinks>
        </Container>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  width: 100%;
  background: ${props => props.transparent ? 'none' : props.theme.color.white};
  transition: 0.25s ease all;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  z-index: 1000;
  box-shadow: ${props => props.transparent ? 'none' : props.theme.shadow.regular};
`;

const Container = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  position: relative;

  ${media('tablet')} {
    padding: 2rem;
  }
`;

const Logo = styled.img`
  height: 5rem;
  margin-right: 5rem;
  transition: 0.25s ease all;

  ${media('tablet')} {
    height: 2.5rem;
    margin-right: 2rem;
  }
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

  ${media('tablet')} {
    display: none;
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

const MobileToggler = styled.button`
  display: none;

  ${media('tablet')} {
    display: block;
    padding: 0.5rem;
    background: ${props => props.theme.color.white};
    border-radius: 0.25rem;
    box-shadow: ${props => props.theme.shadow.regular};
  }
`;

const MobileNavLinks = styled.div`
  display: none;

  ${media('tablet')} {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    position: absolute;
    z-index: 1000;
    top: 1rem;
    right: 1rem;
    left: 1rem;
    width: calc(100% - 2rem);
    background: ${props => props.theme.color.white};
    padding: ${props => props.show ? '1rem 1rem 2rem' : '0 1rem'};
    border-radius: 0.25rem;
    max-height: ${props => props.show ? '25rem' : '0'};
    transition: 0.25s ease all;
    overflow: hidden;
    box-shadow: ${props => props.theme.shadow.regular};

    button {
      padding: 0.5rem;
      background: ${props => props.theme.color.red};
      border-radius: 0.25rem;
      box-shadow: ${props => props.theme.shadow.regular};
    }
  }
`;

const MobileNavLink = styled(Link)`
  width: 100%;
  color: ${props => props.theme.color.dark};
  text-decoration: none;
  padding: 1rem 0;
  border-bottom: 0.1rem solid #EEE;
  font-size: 1rem;
  line-height: 1;
`;
