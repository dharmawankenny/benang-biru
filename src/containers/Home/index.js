import React from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import Headroom from 'react-headroom';

import LogoFaceImage from '../../assets/logoface.png';
import SlideShowOneImage from '../../assets/homepage-slideshow-1.jpg';
import TestimonyBgImg from '../../assets/testimony-bg.jpg';
import ProductBgImg from '../../assets/homepage-product-bg.jpg';
import ShirtImg from '../../assets/shirt.jpg';
import PoloImg from '../../assets/polo.jpg';
import HoodieImg from '../../assets/hoodie.jpg';
import HoodieProd from '../../assets/hoodie-product.jpg';
import ShirtProd from '../../assets/tshirt.jpeg';

import { media } from '../../commons/theme';

import Icon from '../../components/Icon';
import NavigationBar from '../../components/NavigationBar';

import AuthState from '../../states/AuthState';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      sliderPos: 0,
      testimonyPos: 0,
    };
  }

  render() {
    return (
      <Wrapper>
        <HeadroomWrapper>
          <Headroom>
            <NavigationBar />
          </Headroom>
        </HeadroomWrapper>
        <Hero>
          <HeroImage src={SlideShowOneImage} />
          <HeroContent>
            <NavigationBar transparent />
            <HeroText>
              <h1>TERIMA PESANAN</h1>
              <p>Kami merupakan perusahaan penyedia jasa pembuatan produk konveksi yang telah dipercaya berbagai instansi dan fashion label untuk memenuhi kebutuhan produksi kaos, polo, kemeja, jaket, seragam kantor, seminar kit, dan lainnya. Dengan mengedepankan kualitas dan kepuasan konsumen, kami siap menjadi mitra terbaik anda.</p>
            </HeroText>
          </HeroContent>
        </Hero>
        <WhyUs>
          <WhyUsDecoration src={LogoFaceImage} />
          <WhyUsContent>
            <h1>PERCAYAKAN KEPADA KAMI</h1>
            <Featurette>
              <Feature>
                <div>
                  <Icon name="quality" size={2} noPadding />
                  <h4>Kualitas Terbaik</h4>
                </div>
                <p>Didukung dengan mesin konveksi kelas industrial dan SDM yang professional membuat hasil produksi Benang Biru memiliki kualitas terbaik.</p>
              </Feature>
              <Feature>
                <div>
                  <Icon name="experienced" size={2} noPadding />
                  <h4>Berpengalaman</h4>
                </div>
                <p>Tim Benang Biru terdiri dari orang-orang yang sudah berpengalaman lebih dari 15 tahun di bidangnya.</p>
              </Feature>
              <Feature>
                <div>
                  <Icon name="timely" size={2} noPadding />
                  <h4>Tepat Waktu</h4>
                </div>
                <p>Benang Biru menggunakan sistem penjadwalan produksi garmen yang cukup akurat dan efisien, sehingga pesanan anda akan selesai tepat waktu.</p>
              </Feature>
            </Featurette>
            <Featurette>
              <Feature>
                <div>
                  <Icon name="cheap" size={2} noPadding />
                  <h4>Harga Terjangkau</h4>
                </div>
                <p>Benang Biru memiliki berbagai varian bahan, sehingga memungkinkan anda untuk dapat mendapatkan produk konveksi berkualitas sesuai dengan budget anda.</p>
              </Feature>
              <Feature>
                <div>
                  <Icon name="consultation" size={2} noPadding />
                  <h4>Konsultasi Produk</h4>
                </div>
                <p>Tim Benang Biru melayani konsultasi produksi dan design untuk memenuhi kebutuhan anda.</p>
              </Feature>
              <Feature>
                <div>
                  <Icon name="legal" size={2} noPadding />
                  <h4>Berbadan Hukum</h4>
                </div>
                <p>Benang Biru merupakan perusahaan berbadan hukum yang sudah terdaftar, dan memiliki surat izin usaha yang lengkap.</p>
              </Feature>
            </Featurette>
          </WhyUsContent>
        </WhyUs>
        <Testimonial>
          <TestimonialBg src={TestimonyBgImg} />
          <TestimonialContent>
            <h1>PELANGGAN KAMI TELAH<br />MEMBUKTIKANNYA</h1>
            <Testimony>
              <Person src="https://metrouk2.files.wordpress.com/2018/03/621651482-e1520869019624.jpg" />
              <TestimonyContent>
                <p>A suspendisse condimentum diam ac sagittis scelerisque sagittis phasellus velit metus vitae nostra vitae ante facilisi sodales et curae.Dis est natoque lobortis neque a.</p>
                <h4>Jeremy Clarkson - The Grand Tour</h4>
              </TestimonyContent>
            </Testimony>
          </TestimonialContent>
        </Testimonial>
        <WhatYouNeed>
          <WhatYouNeedDecoration src={LogoFaceImage} />
          <WhatYouNeedContent>
            <h1>KAMI DAPAT MEMENUHI BERBAGAI<br /><span>KEBUTUHAN</span> ANDA</h1>
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
          </WhatYouNeedContent>
        </WhatYouNeed>
        <OurProducts>
          <OurProductsBg src={ProductBgImg} />
          <OurProductsContent>
            <h1>HARGA <span>TERJANGKAU</span></h1>
            <Products>
              <Product>
                <img src={ShirtImg} />
                <div>
                  <h4>Rp 50.000,-</h4>
                  <div>
                    <Icon name="checked" size={1} background="white" />
                    <span>Cotton Combed 30s</span>
                  </div>
                  <div>
                    <Icon name="checked" size={1} background="white" />
                    <span>Sablon 4 Warna A3</span>
                  </div>
                  <div>
                    <Icon name="checked" size={1} background="white" />
                    <span>Sablon Label</span>
                  </div>
                  <div>
                    <Icon name="checked" size={1} background="white" />
                    <span>Packing Plastic</span>
                  </div>
                </div>
              </Product>
              <Product>
                <img src={PoloImg} />
                <div>
                  <h4>Rp 100.000,-</h4>
                  <div>
                    <Icon name="checked" size={1} background="white" />
                    <span>Fleece</span>
                  </div>
                  <div>
                    <Icon name="checked" size={1} background="white" />
                    <span>Sablon 4 Warna A3</span>
                  </div>
                  <div>
                    <Icon name="checked" size={1} background="white" />
                    <span>Sablon Label</span>
                  </div>
                  <div>
                    <Icon name="checked" size={1} background="white" />
                    <span>Packing Plastic</span>
                  </div>
                </div>
              </Product>
              <Product>
                <img src={HoodieImg} />
                <div>
                  <h4>Rp 65.000,-</h4>
                  <div>
                    <Icon name="checked" size={1} background="white" />
                    <span>Lacoste</span>
                  </div>
                  <div>
                    <Icon name="checked" size={1} background="white" />
                    <span>Sablon / Bordir Logo Dada</span>
                  </div>
                  <div>
                    <Icon name="checked" size={1} background="white" />
                    <span>Sablon Label</span>
                  </div>
                  <div>
                    <Icon name="checked" size={1} background="white" />
                    <span>Packing Plastic</span>
                  </div>
                </div>
              </Product>
            </Products>
          </OurProductsContent>
        </OurProducts>
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
  margin: 0 auto 0;
`;

const Action = styled.button`
  padding: 0.75rem 1.5rem;
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.dark};
  margin: 1rem 0 0;
  border-radius: 0.25rem;
`;

const HeadroomWrapper = styled.div`
  .headroom--unfixed {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
  }

  .headroom--unpinned {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
  }

  .headroom--pinned {
    max-height: 9rem;
    opacity: 1;
  }
`;

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: none;

  ${media('tablet')} {
    height: auto;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const HeroContent = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 0;
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;

  ${media('tablet')} {
    height: auto;
    min-height: 100vh;
  }
`;

const HeroText = styled.div`
  margin-bottom: 4rem;
  max-width: 40rem;

  ${media('tablet')} {
    height: auto;
    margin-top: 30vh;
    padding: 0 2rem;
  }

  h1,
  p {
    text-align: left;
    color: ${props => props.theme.color.white};
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;

    ${media('tablet')} {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.25rem;
    line-height: 1.4;

    ${media('tablet')} {
      font-size: 0.875rem;
    }
  }
`;

const WhyUs = styled.div`
  position: relative;
  background: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;

  ${media('tablet')} {
    padding: 4rem 2rem;
  }
`;

const WhyUsContent = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  ${media('tablet')} {
    justify-content: center;
  }

  h1 {
    font-size: 2.5rem;
    width: 100%;

    ${media('tablet')} {
      font-size: 1.75rem;
      text-align: center;
    }
  }

  .divider {
    margin: 3rem 0 0;
    width: 10rem;
    height: 0.25rem;
    background: ${props => props.theme.color.pegasus};

    ${media('tablet')} {
      margin: 2rem 0 0;
    }
  }
`;

const Featurette = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  margin: 3rem 0 0;
  widt

  ${media('tablet')} {
    margin: 2rem 0 0;
  }
`;

const Feature = styled.div`
  flex: 1;
  margin: 0 3rem;
  padding: 2rem;
  border-radius: 0.5rem;
  background: ${props => props.theme.color.white};
  box-shadow: ${props => props.theme.shadow.regular};

  &:first-of-type,
  &:last-of-type {
    margin: 0;
  }

  ${media('tablet')} {
    flex: none;
    width: 100%;
    margin: 2rem 0 ;
  }

  & > div {
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;

    h4 {
      flex: 1;
      margin-left: 0.5rem;
      font-size: 1.5rem;

      ${media('tablet')} {
        width: 100%;
        flex: none;
        margin-top: 1rem;
        margin-left: 0;
        font-size: 1.25rem;
        text-align: center;
      }
    }
  }

  p {
    line-height: 1.4;

    ${media('tablet')} {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      text-align: center;
    }
  }
`;

const WhyUsDecoration = styled.img`
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

const Testimonial = styled.div`
  position: relative;
  background: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;
`;

const TestimonialContent = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 8rem 0 6rem;

  ${media('tablet')} {
    padding: 4rem 2rem;
  }

  h1 {
    text-align: center;
    line-height: 1.4;
    color: ${props => props.theme.color.white};
    margin-bottom: 2rem;

    ${media('tablet')} {
      font-size: 1.75rem;
    }
  }
`;

const TestimonialBg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Testimony = styled.div`
  width: 100%;
  max-width: 48rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: ${props => props.theme.color.white};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow.regular};
`;

const Person = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 8rem;
  margin-right: 2rem;

  ${media('tablet')} {
    margin: 0 0 2rem;
  }
`;

const TestimonyContent = styled.div`
  flex: 1;

  ${media('tablet')} {
    flex: none;
    width: 100%;

    h4 {
      text-align: center;
      line-height: 1.4;
    }
  }

  p {
    line-height: 1.4;
    margin: 0 0 1rem;

    ${media('tablet')} {
      text-align: center;
    }
  }
`;

const WhatYouNeed = styled.div`
  position: relative;
  background: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;
`;

const WhatYouNeedContent = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: 5rem 0;

  ${media('tablet')} {
    padding: 4rem 2rem;
  }

  h1 {
    text-align: center;
    line-height: 1.4;
    width: 100%;

    ${media('tablet')} {
      font-size: 1.75rem;
    }

    span {
      color: ${props => props.theme.color.blueDark};
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

  ${media('tablet')} {
    margin: 2rem 0 0;
  }
`;

const Service = styled.div`
  flex: 1;
  margin: 0 3rem;
  border-radius: 1rem;
  background: ${props => props.theme.color.white};
  color: ${props => props.theme.color.dark};
  box-shadow: ${props => props.theme.shadow.regular};

  &:first-of-type,
  &:last-of-type {
    margin: 0;
  }

  ${media('tablet')} {
    flex: none;
    width: 100%;
    margin: 2rem 0 ;
  }

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
      color: ${props => props.theme.color.blue};
      margin-bottom: 1rem;
    }

    p {
      ${media('tablet')} {
        font-size: 0.875rem;
      }
    }
  }
`;

const WhatYouNeedDecoration = styled.img`
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

const OurProducts = styled.div`
  position: relative;
  background: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;
`;

const OurProductsContent = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: 5rem 0;

  ${media('tablet')} {
    padding: 4rem 2rem;
  }

  h1 {
    text-align: center;
    line-height: 1.4;
    width: 100%;

    ${media('tablet')} {
      font-size: 1.75rem;
    }

    span {
      color: ${props => props.theme.color.blueDark};
    }
  }
`;

const Products = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 3rem 0 0;

  ${media('tablet')} {
    margin: 2rem 0 0;
  }
`;

const Product = styled.div`
  flex: 1;
  margin: 0 2rem;
  border-radius: 1rem;
  background: ${props => props.theme.color.blue};
  color: ${props => props.theme.color.white};
  box-shadow: ${props => props.theme.shadow.regular};

  &:first-of-type,
  &:last-of-type {
    margin: 0;
  }

  ${media('tablet')} {
    flex: none;
    width: 100%;
    margin: 2rem 0 ;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 1rem 1rem 0 0;
  }

  & > div {
    padding: 2rem;

    h4,
    & > div {
      width: 100%;
    }

    h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    & > div {
      width: 100%;
      padding: 1rem 1rem 1rem 0;
      border-bottom: 0.1rem solid ${props => props.theme.color.whiteRGBA(0.75)};
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      align-content: center;

      & > span {
        flex: 1;
        text-align: center;
        line-height: 1.4;
        margin-left: 1rem;

        ${media('tablet')} {
          font-size: 0.875rem;
        }
      }
    }
  }
`;

const OurProductsBg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

