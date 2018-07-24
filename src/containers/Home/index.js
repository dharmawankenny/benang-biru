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
              <p>Parturient fusce ullamcorper conubia imperdiet torquent consectetur euismod et mi libero ad sem sapien ridiculus erat vestibulum.Pharetra suspendisse fames adipiscing odio a ante a dapibus adipiscing maecenas eu malesuada posuere diam class a conubia non nostra commodo.Fermentum per at dis suspendisse ut fringilla at adipiscing vestibulum neque a.</p>
            </HeroText>
          </HeroContent>
        </Hero>
        <WhyUs>
          <WhyUsDecoration src={LogoFaceImage} />
          <WhyUsContent>
            <h1>Percayakan kepada kami</h1>
            <Featurette>
              <Feature>
                <h4>Tepat Waktu</h4>
                <p>A suspendisse condimentum diam ac sagittis scelerisque sagittis phasellus velit metus vitae nostra vitae ante facilisi sodales et curae.Dis est natoque lobortis neque a.</p>
              </Feature>
              <Feature>
                <h4>Berpengalaman</h4>
                <p>A suspendisse condimentum diam ac sagittis scelerisque sagittis phasellus velit metus vitae nostra vitae ante facilisi sodales et curae.Dis est natoque lobortis neque a.</p>
              </Feature>
              <Feature>
                <h4>Jaminan Retur</h4>
                <p>A suspendisse condimentum diam ac sagittis scelerisque sagittis phasellus velit metus vitae nostra vitae ante facilisi sodales et curae.Dis est natoque lobortis neque a.</p>
              </Feature>
            </Featurette>
            <Featurette>
              <Feature>
                <h4>Kualitas Terbaik</h4>
                <p>A suspendisse condimentum diam ac sagittis scelerisque sagittis phasellus velit metus vitae nostra vitae ante facilisi sodales et curae.Dis est natoque lobortis neque a.</p>
              </Feature>
              <Feature>
                <h4>Harga Terjangkau</h4>
                <p>A suspendisse condimentum diam ac sagittis scelerisque sagittis phasellus velit metus vitae nostra vitae ante facilisi sodales et curae.Dis est natoque lobortis neque a.</p>
              </Feature>
              <Feature>
                <h4>Transaksi Mudah</h4>
                <p>A suspendisse condimentum diam ac sagittis scelerisque sagittis phasellus velit metus vitae nostra vitae ante facilisi sodales et curae.Dis est natoque lobortis neque a.</p>
              </Feature>
            </Featurette>
          </WhyUsContent>
        </WhyUs>
        <Testimonial>
          <TestimonialBg src={TestimonyBgImg} />
          <TestimonialContent>
            <h1>PELANGGAN KAMI<br />TELAH MEMBUKTIKANNYA</h1>
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
                <img src="https://images.allsaints.com/products/600/MG006P/5339/MG006P-5339-1.jpg" />
                <div>
                  <h4>Hoodie</h4>
                  <p>A suspendisse condimentum diam ac sagittis scelerisque sagittis phasellus velit metus vitae nostra vitae ante facilisi sodales et curae.Dis est natoque lobortis neque a.</p>
                </div>
              </Service>
              <Service>
                <img src="https://images.allsaints.com/products/600/MG006P/5339/MG006P-5339-1.jpg" />
                <div>
                  <h4>Hoodie</h4>
                  <p>A suspendisse condimentum diam ac sagittis scelerisque sagittis phasellus velit metus vitae nostra vitae ante facilisi sodales et curae.Dis est natoque lobortis neque a.</p>
                </div>
              </Service>
              <Service>
                <img src="https://images.allsaints.com/products/600/MG006P/5339/MG006P-5339-1.jpg" />
                <div>
                  <h4>Hoodie</h4>
                  <p>A suspendisse condimentum diam ac sagittis scelerisque sagittis phasellus velit metus vitae nostra vitae ante facilisi sodales et curae.Dis est natoque lobortis neque a.</p>
                </div>
              </Service>
            </Services>
            <Services>
              <Service>
                <img src="https://images.allsaints.com/products/600/MG006P/5339/MG006P-5339-1.jpg" />
                <div>
                  <h4>Hoodie</h4>
                  <p>A suspendisse condimentum diam ac sagittis scelerisque sagittis phasellus velit metus vitae nostra vitae ante facilisi sodales et curae.Dis est natoque lobortis neque a.</p>
                </div>
              </Service>
              <Service>
                <img src="https://images.allsaints.com/products/600/MG006P/5339/MG006P-5339-1.jpg" />
                <div>
                  <h4>Hoodie</h4>
                  <p>A suspendisse condimentum diam ac sagittis scelerisque sagittis phasellus velit metus vitae nostra vitae ante facilisi sodales et curae.Dis est natoque lobortis neque a.</p>
                </div>
              </Service>
              <Service>
                <img src="https://images.allsaints.com/products/600/MG006P/5339/MG006P-5339-1.jpg" />
                <div>
                  <h4>Hoodie</h4>
                  <p>A suspendisse condimentum diam ac sagittis scelerisque sagittis phasellus velit metus vitae nostra vitae ante facilisi sodales et curae.Dis est natoque lobortis neque a.</p>
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
                  <span>Bahan Nyaman</span>
                  <span>Packaging</span>
                  <span>Delivery</span>
                </div>
              </Product>
              <Product>
                <img src={PoloImg} />
                <div>
                  <h4>Rp 50.000,-</h4>
                  <span>Bahan Nyaman</span>
                  <span>Packaging</span>
                  <span>Delivery</span>
                </div>
              </Product>
              <Product>
                <img src={HoodieImg} />
                <div>
                  <h4>Rp 50.000,-</h4>
                  <span>Bahan Nyaman</span>
                  <span>Packaging</span>
                  <span>Delivery</span>
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
`;

const Featurette = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 2rem 0 0;
`;

const Feature = styled.div`
  flex: 1;
  margin: 0 2rem;

  &:first-of-type,
  &:last-of-type {
    margin: 0;
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
  align-items: center;
  align-content: center;
  margin: 2rem 0 0;
`;

const Service = styled.div`
  flex: 1;
  margin: 0 2rem;
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

