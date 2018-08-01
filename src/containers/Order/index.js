import React from 'react';
import styled from 'styled-components';

import ProductsHeaderBgImg from '../../assets/products-header-bg.jpg';

import { media } from '../../commons/theme';

import Banner from '../../components/Banner';
import Icon from '../../components/Icon';
import NavigationBar from '../../components/NavigationBar';

export default class Order extends React.Component {
  render() {
    return (
      <Wrapper>
        <NavigationBar />
        <Banner src={ProductsHeaderBgImg} text="PEMESANAN" />
        <Content>
          <Text>
            Ingin memesan atau konsultasi seputar produksi seperti jenis bahan, jenis sablon, dan harga.<br />
            Jangan ragu untuk hubungi kanal di bawah ini, Customer Service kami akan dengan senang hati membantu anda<br />
            <br />
            Hubungi kami di<br />
            <IconWrapper><Icon name="phone" size={1.75} color="dark" noPadding/>(022)-2056-9330</IconWrapper>
            <IconWrapper><Icon name="whatsapp" size={1.75} color="dark" noPadding/>0878-0018-1990</IconWrapper>
            <IconWrapper><Icon name="line" size={1.75} color="dark" noPadding/>@benangbirubdg</IconWrapper>
            <IconWrapper><Icon name="email" size={1.75} color="dark" noPadding/>info@benangbiru.com</IconWrapper>
            <br />
            Kunjungi juga halaman media social kami di<br />
            <IconWrapper><Icon name="facebook" size={1.75} color="dark" noPadding/>Benang Biru Garmindo</IconWrapper>
            <IconWrapper><Icon name="instagram" size={1.75} color="dark" noPadding/>@BenangBiruBdg</IconWrapper>
          </Text>
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
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  padding: 6rem 0;

  ${media('tablet')} {
    padding: 4rem 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.25rem;
  line-height: 2;
  text-align: left;

  ${media('tablet')} {
    font-size: 1rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  & > div {
    margin-right: 0.5rem;
  }
`;
