import React from 'react';
import styled from 'styled-components';

import LogoFaceImage from '../../assets/logoface.png';
import AboutUsBgImage from '../../assets/about-us-bg.jpg';

import { media } from '../../commons/theme';

import ImageZoomModal from '../../components/ImageZoomModal';
import NavigationBar from '../../components/NavigationBar';

import gallery1 from '../../assets/office/1.jpg';
import gallery2 from '../../assets/office/2.jpg';
import gallery3 from '../../assets/office/3.jpg';
import gallery4 from '../../assets/office/4.jpg';
import gallery5 from '../../assets/office/5.jpg';
import gallery6 from '../../assets/office/6.jpg';
import gallery7 from '../../assets/office/7.jpg';
import gallery8 from '../../assets/office/8.jpg';
import gallery9 from '../../assets/office/9.jpg';
import gallery10 from '../../assets/office/10.jpg';
import gallery11 from '../../assets/office/11.jpg';
import gallery12 from '../../assets/office/12.jpg';
import gallery13 from '../../assets/office/13.jpg';
import gallery14 from '../../assets/office/14.jpg';
import gallery15 from '../../assets/office/15.jpg';
import gallery16 from '../../assets/office/16.jpg';
import gallery17 from '../../assets/office/17.jpg';
import gallery18 from '../../assets/office/18.jpg';
import gallery19 from '../../assets/office/19.jpg';
import gallery20 from '../../assets/office/20.jpg';
import gallery21 from '../../assets/office/21.jpg';
import gallery22 from '../../assets/office/22.jpg';
import gallery23 from '../../assets/office/23.jpg';
import gallery24 from '../../assets/office/24.jpg';
import gallery25 from '../../assets/office/25.jpg';


export default class About extends React.Component {
  static OFFICE_PICTURES = [
    gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery9,gallery10,
    gallery11,gallery12,gallery13,gallery14,gallery15,gallery16,gallery17,gallery18,gallery19,gallery20,
    gallery21,gallery22,gallery23,gallery24,gallery25,
  ];

  constructor() {
    super();

    this.state = {
      expandable: '',
    };
  }

  closeExpandable = () => this.setState({ expandable: '' });

  expandImage = url => this.setState({ expandable: url });

  render() {
    return (
      <Wrapper>
        {this.state.expandable !== '' &&
          <ImageZoomModal
            src={this.state.expandable}
            onClose={this.closeExpandable}
          />
        }
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
            {About.OFFICE_PICTURES.map(url => (
              <OfficePicture>
                <img src={url} />
                <button onClick={() => this.expandImage(url)}>
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

  h1 {
    font-size: 3rem;
    text-align: center;
    color: ${props => props.theme.color.white};
    margin-bottom: 4rem;
    padding: 0 2rem 1rem;
    border-bottom: 0.25rem solid ${props => props.theme.color.white};
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
  align-items: flex-start;
  align-content: flex-start;
  padding: 2rem;
  background: ${props => props.theme.color.white};
  border-radius: 0.5rem;

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

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.color.dark};
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
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const OfficePicture = styled.div`
  width: calc((100% - 6rem) / 3);
  margin: 0 0 2rem;
  height: 16rem;
  position: relative;
  overflow: hidden;

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
  opacity: 0.1;
`;
