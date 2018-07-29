import React from 'react';
import styled from 'styled-components';

import ProductsHeaderBgImg from '../../assets/products-header-bg.jpg';
import BgDecoratorImg from '../../assets/bg-decorator.jpg';
import HoodieProd from '../../assets/hoodie-product.jpg';
import ShirtProd from '../../assets/tshirt.jpeg';


import { media } from '../../commons/theme';

import Banner from '../../components/Banner';
import NavigationBar from '../../components/NavigationBar';

export default class Products extends React.Component {
  render() {
    return (
      <Wrapper>
        <NavigationBar />
        <Banner src={ProductsHeaderBgImg} text="INFORMASI PRODUK" />
        <Content>
          <Container>
            <Services>
              <Service>
                <img src={HoodieProd} />
                <div>
                  <h4>Kaos</h4>
                  <p>Kaos atau T-Shirt merupakan produk unggulan Kami dan menjadi pilihan favorit konsumen.  Dengan berbagai pilihan bahan & jenis sablon, produk kaos ini cocok untuk fashion label, maupun seragam outing & event.</p>
                </div>
              </Service>
              <Service>
                <img src={ShirtProd} />
                <div>
                  <h4>Hoodie</h4>
                  <p>Produk unggulan lainnya dari Kami adalah Hoodie & Sweater. Dengan model unisex dan pilihan ketebalan yang bervariasi, produk hoodie ini cocok untuk menjadi seragam komunitas, event maupun fashion label.</p>
                </div>
              </Service>
              <Service>
                <img src={ShirtProd} />
                <div>
                  <h4>Polo Shirt</h4>
                  <p>Kami dapat memproduksi polo shirt, kaos kerah, atau wangki untuk kebutuhan seragam kantor maupun souvenir event. Dengan menggunakan cotton pique atau lacoste, polo shirt memberi kesan rapi dan nyaman.</p>
                </div>
              </Service>
            </Services>
            <Services>
              <Service>
                <img src={HoodieProd} />
                <div>
                  <h4>Kemeja</h4>
                  <p>Kami melayani pembuatan kemeja formal seperti safari, oxford, pdh. Hingga kemeja non-formal seperti flannel, chambray dan kemeja pantai. Dengan pilihan bordir atau sablon untuk jadi identitas seragam anda.</p>
                </div>
              </Service>
              <Service>
                <img src={ShirtProd} />
                <div>
                  <h4>Jersey</h4>
                  <p>Kami juga bisa memproduksi jersey atau seragam olahraga dengan menggunakan bahan dri fit, waffle, benzema, paragon, diadora. Dengan menggunakkan aplikasi sablon & bordir untuk logo & nama pemain.</p>
                </div>
              </Service>
              <Service>
                <img src={ShirtProd} />
                <div>
                  <h4>Seminar Kit</h4>
                  <p>Produk seminar kit yang bisa diproduksi Kami antara lain adalah totebag, topi, notes, pulpen, lanyard, mug, paying, dll. Kami menyediakan paket seminar kit yang bisa disesuaikan dengan budget anda.</p>
                </div>
              </Service>
            </Services>
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
  background: url('${BgDecoratorImg}') no-repeat center top;
  background-size: 100vw auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
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

const Services = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  margin: 3rem 0 0;
`;

const Service = styled.div`
  flex: 1;
  margin: 0 3rem;
  border-radius: 1rem;
  background: ${props => props.theme.color.blue};
  color: ${props => props.theme.color.white};

  img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    object-position: top;
    border-radius: 1rem 1rem 0 0;
  }

  & > div {
    padding: 2rem;

    h4,
    p {
      text-align: center;
      line-height: 1.4;
    }

    h4 {
      margin-bottom: 1rem;
    }
  }

  &:first-of-type,
  &:last-of-type {
    margin: 0;
  }
`;
