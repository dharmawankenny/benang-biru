import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';

import LogoFaceImage from '../../assets/logoface.png';
import AboutUsBgImage from '../../assets/about-us-bg.jpg';

import { media } from '../../commons/theme';

import ImageZoomModal from '../../components/ImageZoomModal';
import NavigationBar from '../../components/NavigationBar';

export default class About extends React.Component {
  static OFFICE_PICTURES = [
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
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
        <Headroom>
          <NavigationBar />
        </Headroom>
        <Hero>
          <HeroImage src={AboutUsBgImage} />
          <h1>TENTANG KAMI</h1>
          <HeroContent>
            <HeroBox flex={1} withMargin>
              <h4>PROFIL</h4>
              <p>Kami merupakan perusahaan penyedia jasa pembuatan produk konveksi yang telah dipercaya berbagai instansi dan fashion label untuk memenuhi kebutuhan produksi kaos, polo, kemeja, jaket, seragam kantor, seminar kit, dan lainnya. Dengan mengedepankan kualitas dan kepuasan konsumen, kami siap menjadi mitra terbaik anda.</p>
            </HeroBox>
            <HeroBox flex={1}>
              <h4>VISI & MISI</h4>
              <p>Kami merupakan perusahaan penyedia jasa pembuatan produk konveksi yang telah dipercaya berbagai instansi dan fashion label untuk memenuhi kebutuhan produksi kaos, polo, kemeja, jaket, seragam kantor, seminar kit, dan lainnya. Dengan mengedepankan kualitas dan kepuasan konsumen, kami siap menjadi mitra terbaik anda.</p>
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
            Eu consectetur magnis ac tempor elit nostra adipiscing ipsum non a suscipit adipiscing cursus mi vehicula habitasse facilisis imperdiet a varius iaculis felis a aptent dictumst ac consectetur a.A mollis lacinia cras enim scelerisque habitasse ornare nisl parturient a eu vulputate a adipiscing mus vehicula fames eu tincidunt.A suspendisse fermentum rhoncus risus fringilla sociis eleifend ante dolor eros a aliquet massa adipiscing erat adipiscing eu etiam senectus magna tempor auctor mi commodo.Vivamus duis sed a a lectus tincidunt a consectetur a orci id dui bibendum a class habitant nunc cursus a a curabitur sociis.Magna dui nascetur.
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
  align-items: flex-start;
  align-content: flex-start;
  padding: 2rem;
  background: ${props => props.theme.color.white};
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadow.regular};

  ${media('tablet')} {
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
  justify-content: space-between;
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
