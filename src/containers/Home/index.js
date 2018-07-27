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

import NavigationBar from '../../components/NavigationBar';

import AuthState from '../../states/AuthState';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      showHeadroom: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  scrollHandler = e => {
    const scrollPos = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

    if (!this.state.showHeadroom && scrollPos > 100) {
      this.setState({ showHeadroom: true });
    } else if (this.state.showHeadroom && scrollPos <= 100) {
      this.setState({ showHeadroom: false });
    }
  };

  render() {
    return (
      <Wrapper>
        <Headroom>
          <NavigationBar />
        </Headroom>
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
            <h1>Percayakan kepada kami</h1>
            <div className="divider" />
            <Featurette>
              <Feature>
                <h4>Kualitas Terbaik</h4>
                <p>Didukung dengan mesin konveksi kelas industrial dan SDM yang professional membuat hasil produksi Benang Biru memiliki kualitas terbaik.</p>
              </Feature>
              <Feature>
                <h4>Berpengalaman</h4>
                <p>Tim Benang Biru terdiri dari orang-orang yang sudah berpengalaman lebih dari 15 tahun di bidangnya.</p>
              </Feature>
              <Feature>
                <h4>Tepat Waktu</h4>
                <p>Benang Biru menggunakan sistem penjadwalan produksi garmen yang cukup akurat dan efisien, sehingga pesanan anda akan selesai tepat waktu.</p>
              </Feature>
            </Featurette>
            <Featurette>
              <Feature>
                <h4>Harga Terjangkau</h4>
                <p>Benang Biru memiliki berbagai varian bahan, sehingga memungkinkan anda untuk dapat mendapatkan produk konveksi berkualitas sesuai dengan budget anda.</p>
              </Feature>
              <Feature>
                <h4>Konsultasi Produk</h4>
                <p>Tim Benang Biru melayani konsultasi produksi dan design untuk memenuhi kebutuhan anda.</p>
              </Feature>
              <Feature>
                <h4>Berbadan Hukum</h4>
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
                  <span>Cotton Combed 30s</span>
                  <span>Sablon 4 Warna A3</span>
                  <span>Sablon Label</span>
                  <span>Packing Plastic</span>
                </div>
              </Product>
              <Product>
                <img src={PoloImg} />
                <div>
                  <h4>Rp 100.000,-</h4>
                  <span>Fleece</span>
                  <span>Sablon 4 Warna A3</span>
                  <span>Sablon Label</span>
                  <span>Packing Plastic</span>
                </div>
              </Product>
              <Product>
                <img src={HoodieImg} />
                <div>
                  <h4>Rp 65.000,-</h4>
                  <span>Lacoste</span>
                  <span>Sablon / Bordir Logo Dada</span>
                  <span>Sablon Label</span>
                  <span>Packing Plastic</span>
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
  margin: -9rem auto 0;
`;

const Action = styled.button`
  padding: 0.75rem 1.5rem;
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.dark};
  margin: 1rem 0 0;
  border-radius: 0.25rem;
`;

const HeadroomWrapper = styled.div`
  pointer-events: ${props => props.visible ? 'auto' : 'none'};
  opacity: ${props => props.visible ? '1' : '0'};
  transition: 0.25s ease all;
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
`;

const HeroText = styled.div`
  margin-bottom: 4rem;
  max-width: 40rem;

  h1,
  p {
    text-align: left;
    color: ${props => props.theme.color.white};
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.4;
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

  h1 {
    font-size: 2.5rem;
    width: 100%;
  }

  .divider {
    margin: 3rem 0 0;
    width: 10rem;
    height: 0.25rem;
    background: ${props => props.theme.color.pegasus};
  }
`;

const WhyUsContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-right: 2rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
`;

const Featurette = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  margin: 3rem 0 0;
`;

const Feature = styled.div`
  flex: 1;
  margin: 0 3rem;

  &:first-of-type,
  &:last-of-type {
    margin: 0;
  }

  h4 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.4;
  }
`;

const WhyUsDecoration = styled.img`
  position: absolute;
  top: 8rem;
  right: -8rem;
  z-index: -1;
  width: 48rem;
  opacity: 0.1;
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
  padding: 0 5rem;
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 8rem 0 6rem;

  h1 {
    text-align: center;
    line-height: 1.4;
    color: ${props => props.theme.color.white};
    margin-bottom: 2rem;
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
`;

const Person = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 8rem;
  margin-right: 2rem;
`;

const TestimonyContent = styled.div`
  flex: 1;

  p {
    line-height: 1.4;
    margin: 0 0 1rem;
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

  h1 {
    text-align: center;
    line-height: 1.4;
    width: 100%;

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

const WhatYouNeedDecoration = styled.img`
  position: absolute;
  top: 8rem;
  right: -8rem;
  z-index: -1;
  width: 48rem;
  opacity: 0.1;
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

  h1 {
    text-align: center;
    line-height: 1.4;
    width: 100%;

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
  margin: 2rem 0 0;
`;

const Product = styled.div`
  flex: 1;
  margin: 0 2rem;
  border-radius: 1rem;
  background: ${props => props.theme.color.blue};
  color: ${props => props.theme.color.white};

  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 1rem 1rem 0 0;
  }

  & > div {
    padding: 2rem;

    h4,
    span {
      width: 100%;
      text-align: center;
      line-height: 1.4;
    }

    h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    span {
      display: block;
      width: 100%;
      padding: 1rem;
      border-bottom: 0.1rem solid ${props => props.theme.color.whiteRGBA(0.75)};
    }
  }

  &:first-of-type,
  &:last-of-type {
    margin: 0;
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

