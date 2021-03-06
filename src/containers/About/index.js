import React from 'react';
import styled from 'styled-components';

import LogoFaceImage from '../../assets/logoface.png';
import AboutUsBgImage from '../../assets/about-us-bg.jpg';

import { media } from '../../commons/theme';

import ImageZoomModal from '../../components/ImageZoomModal';
import NavigationBar from '../../components/NavigationBar';

import office1 from '../../assets/office/1.jpg';
import office2 from '../../assets/office/2.jpg';
import office3 from '../../assets/office/3.jpg';
import office4 from '../../assets/office/4.jpg';
import office5 from '../../assets/office/5.jpg';
import office6 from '../../assets/office/6.jpg';
import office7 from '../../assets/office/7.jpg';
import office8 from '../../assets/office/8.jpg';
import office9 from '../../assets/office/9.jpg';
import office10 from '../../assets/office/10.jpg';
import office11 from '../../assets/office/11.jpg';
import office12 from '../../assets/office/12.jpg';
import office13 from '../../assets/office/13.jpg';
import office14 from '../../assets/office/14.jpg';
import office15 from '../../assets/office/15.jpg';
import office16 from '../../assets/office/16.jpg';
import office17 from '../../assets/office/17.jpg';
import office18 from '../../assets/office/18.jpg';
import office19 from '../../assets/office/19.jpg';
import office20 from '../../assets/office/20.jpg';
import office21 from '../../assets/office/21.jpg';
import office22 from '../../assets/office/22.jpg';
import office23 from '../../assets/office/23.jpg';
import office24 from '../../assets/office/24.jpg';
import office25 from '../../assets/office/25.jpg';


export default class About extends React.Component {
  static OFFICE_PICTURES = [
    office1,office2,office3,office4,office5,office6,office7,office8,office9,office10,
    office11,office12,office13,office14,office15,office16,office17,office18,office19,office20,
    office21,office22,office23,office24,office25,
  ];

  constructor() {
    super();

    this.state = {
      expandable: -1,
    };
  }

  closeExpandable = () => this.setState({ expandable: -1 });

  expandImage = index => this.setState({ expandable: index });

  nextImage = () => this.setState({ expandable: this.state.expandable >= About.OFFICE_PICTURES.length - 1 ? 0 : this.state.expandable + 1 });

  prevImage = () => this.setState({ expandable: this.state.expandable <= 0 ? About.OFFICE_PICTURES.length - 1 : this.state.expandable - 1 });

  render() {
    return (
      <Wrapper>
        {this.state.expandable >= 0 && (
          <ImageZoomModal
            src={About.OFFICE_PICTURES[this.state.expandable]}
            onClose={this.closeExpandable}
            onNext={this.nextImage}
            onPrev={this.prevImage}
          />
        )}
        <NavigationBar />
        <Hero>
          <HeroImage src={AboutUsBgImage} />
          <h1>TENTANG KAMI</h1>
          <HeroContent>
            <HeroBox flex={1} withMargin>
              <h4>PROFIL</h4>
              <p>Perusahaan penyedia jasa pembuatan produk konveksi yang telah dipercaya berbagai instansi dan fashion label untuk memenuhi kebutuhan produksi kaos, polo, kemeja, jaket, seragam kantor, seminar kit, dan lain-lain dengan total kapasitas mencapai 10,000 pcs per bulan.</p>
            </HeroBox>
            <HeroBox flex={1}>
              <h4>VISI & MISI</h4>
              <p>Visi <br/>
              Menjadi partner setia dan bisa diandalkan dalam menyediakan produk-produk konveksi, dengan selalu mengedepankan kualitas dan kepuasan konsumen.
              <br/>Misi
              <br/>1. Memberikan Kualitas & Harga terbaik
              <br/>2. Menangani dengan professional
              <br/>3. Produksi Tepat Waktu
              <br/>4. Melayani konsultasi produk & design untuk menghasilkan produk yang tepat
              </p>
            </HeroBox>
          </HeroContent>
        </Hero>
        <Office>
          <h1>KANTOR KAMI</h1>
          <OfficePictures>
            {About.OFFICE_PICTURES.map((url, index) => (
              <OfficePicture>
                <img src={url} />
                <button onClick={() => this.expandImage(index)}>
                  <span>PERBESAR</span>
                </button>
              </OfficePicture>
            ))}
          </OfficePictures>
          <p>
          SDM kami terdiri dari orang-orang yang berpengalaman dan didukung oleh mesin-mesin berkelas industrial sehingga menghasilkan produk terbaik dan berkualitas tinggi. Selain itu sistem kerja industri garmen yang kami terapkan dan lingkungan kerja yang bersih dan nyaman menambah efektifitas dan produktifitas kami dalam bekerja.
          </p>
          <OfficeDecoration src={LogoFaceImage} />
        </Office>
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

const Hero = styled.div`
  width: 100%;
  padding: 4rem 0;
  min-height: calc(100vh - 9rem);
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: none;

  ${media('tablet')} {
    padding: 4rem 2rem;
  }

  h1 {
    font-size: 3rem;
    text-align: center;
    color: ${props => props.theme.color.white};
    margin-bottom: 4rem;
    padding: 0 2rem 1rem;
    border-bottom: 0.25rem solid ${props => props.theme.color.white};

    ${media('tablet')} {
      width: 100%;
      font-size: 2.5rem;
      line-height: 1.4;
      margin-bottom: 2rem;
    }
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
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  position: relative;
  z-index: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
`;

const HeroBox = styled.div`
  flex: ${props => props.flex ? props.flex : 1};
  ${props => props.withMargin ? 'margin: 0 4rem 0 0' : 'margin: 0'};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 2rem;
  background: ${props => props.theme.color.white};
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadow.regular};

  ${media('tablet')} {
    width: 100%;
    flex: none;
    ${props => props.withMargin ? 'margin: 0 0 2rem' : 'margin: 0'};
  }

  h4,
  p {
    width: 100%;
    text-align: center;
    color: ${props => props.theme.color.dark};
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

const Office = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  min-height: 100vh;
  margin: 0 auto;
  padding: 4rem 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;

  ${media('tablet')} {
    padding: 4rem 2rem;
  }

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.color.dark};

    ${media('tablet')} {
      font-size: 1.75rem;
      text-align: center;
    }
  }

  p {
    font-size: 1.125rem;
    line-height: 1.4;
    text-align: center;
    color: ${props => props.theme.color.dark};
  }
`;

const OfficePictures = styled.div`
  width: 100%;
  margin: 4rem 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

const OfficePicture = styled.div`
  width: calc((100% - 6rem) / 3);
  margin: 0 3rem 3rem 0;
  height: 16rem;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadow.regular};

  &:nth-of-type(3n) {
    margin: 0 0 3rem;
  }

  ${media('tablet')} {
    width: 100%;
    margin: 0 0 2rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &:hover {
    img {
      transform: scale(1.125);
      transition: 0.25s ease transform;
    }

    button {
      opacity: 1;
      transition: 0.25s ease opacity;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: 0.25s ease transform;
  }

  button {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(33, 33, 33, 0.75);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    opacity: 0;
    transition: 0.25s ease opacity;
    cursor: pointer;

    span {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      color: ${props => props.theme.color.white};
      border: 0.1rem solid ${props => props.theme.color.white};
      border-radius: 0.25rem;
    }
  }
`;

const OfficeDecoration = styled.img`
  position: absolute;
  top: 8rem;
  right: -8rem;
  z-index: -1;
  width: 48rem;
  opacity: 0.05;
`;
