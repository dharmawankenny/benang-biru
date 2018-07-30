import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';

import ProductsHeaderBgImg from '../../assets/products-header-bg.jpg';

import { media } from '../../commons/theme';

import Banner from '../../components/Banner';
import NavigationBar from '../../components/NavigationBar';

export default class Order extends React.Component {
  render() {
    return (
      <Wrapper>
        <Headroom>
          <NavigationBar />
        </Headroom>
        <Banner src={ProductsHeaderBgImg} text="PEMESANAN" />
        <Content>
          <Text>
          Ingin memesan atau konsultasi seputar produksi seperti jenis bahan, jenis sablon, dan harga.<br />
          Jangan ragu untuk hubungi kanal di bawah ini, Customer Service kami akan dengan senang hati membantu anda<br />
          <br />
          Hubungi kami di<br />
          *icon telpon* (022)-2056-9330<br />
          *icon whatsapp* 0878-0018-1990<br />
          *icon line@* @benangbirubdg<br />
          *icon email* info@benangbiru.com<br />
          <br />
          Kunjungi juga halaman media social kami di<br />
          <br />
          *icon facebook* Benang Biru Garmindo<br />
          *icon instagram* @benangbirubdg<br />
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
