import React from 'react';
import styled from 'styled-components';

import LogoFaceImage from '../../assets/logoface.png';
import GalleryHeaderBgImg from '../../assets/gallery-header-bg.jpg';

import { media } from '../../commons/theme';

import ImageZoomModal from '../../components/ImageZoomModal';
import NavigationBar from '../../components/NavigationBar';

import gallery1 from '../../assets/gallery/1.jpg';
import gallery2 from '../../assets/gallery/2.jpg';
import gallery3 from '../../assets/gallery/3.jpg';
import gallery4 from '../../assets/gallery/4.jpg';
import gallery5 from '../../assets/gallery/5.jpg';
import gallery6 from '../../assets/gallery/6.jpg';
import gallery7 from '../../assets/gallery/7.jpg';
import gallery8 from '../../assets/gallery/8.jpg';
import gallery9 from '../../assets/gallery/9.jpg';
import gallery10 from '../../assets/gallery/10.jpg';
import gallery11 from '../../assets/gallery/11.jpg';
import gallery12 from '../../assets/gallery/12.jpg';
import gallery13 from '../../assets/gallery/13.jpg';
import gallery14 from '../../assets/gallery/14.jpg';
import gallery15 from '../../assets/gallery/15.jpg';
import gallery16 from '../../assets/gallery/16.jpg';
import gallery17 from '../../assets/gallery/17.jpg';
import gallery18 from '../../assets/gallery/18.jpg';
import gallery19 from '../../assets/gallery/19.jpg';
import gallery20 from '../../assets/gallery/20.jpg';
import gallery21 from '../../assets/gallery/21.jpg';
import gallery22 from '../../assets/gallery/22.jpg';
import gallery23 from '../../assets/gallery/23.jpg';
import gallery24 from '../../assets/gallery/24.jpg';
import gallery25 from '../../assets/gallery/25.jpg';
import gallery26 from '../../assets/gallery/26.jpg';
import gallery27 from '../../assets/gallery/27.jpg';
import gallery28 from '../../assets/gallery/28.jpg';
import gallery29 from '../../assets/gallery/29.jpg';
import gallery30 from '../../assets/gallery/30.jpg';
import gallery31 from '../../assets/gallery/31.jpg';
import gallery32 from '../../assets/gallery/32.jpg';
import gallery33 from '../../assets/gallery/33.jpg';
import gallery34 from '../../assets/gallery/34.jpg';
import gallery35 from '../../assets/gallery/35.jpg';
import gallery36 from '../../assets/gallery/36.jpg';
import gallery37 from '../../assets/gallery/37.jpg';
import gallery38 from '../../assets/gallery/38.jpg';
import gallery39 from '../../assets/gallery/39.jpg';
import gallery40 from '../../assets/gallery/40.jpg';
import gallery41 from '../../assets/gallery/41.jpg';
import gallery42 from '../../assets/gallery/42.jpg';
import gallery43 from '../../assets/gallery/43.jpg';
import gallery44 from '../../assets/gallery/44.jpg';
import gallery45 from '../../assets/gallery/45.jpg';
import gallery46 from '../../assets/gallery/46.jpg';
import gallery47 from '../../assets/gallery/47.jpg';
import gallery48 from '../../assets/gallery/48.jpg';
import gallery49 from '../../assets/gallery/49.jpg';
import gallery50 from '../../assets/gallery/50.jpg';
import gallery51 from '../../assets/gallery/51.jpg';
import gallery52 from '../../assets/gallery/52.jpg';
import gallery53 from '../../assets/gallery/53.jpg';
import gallery54 from '../../assets/gallery/54.jpg';
import gallery55 from '../../assets/gallery/55.jpg';
import gallery56 from '../../assets/gallery/56.jpg';
import gallery57 from '../../assets/gallery/57.jpg';


export default class Gallery extends React.Component {
  static GALLERY_PICTURES = [
    gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery9,gallery10,
    gallery11,gallery12,gallery13,gallery14,gallery15,gallery16,gallery17,gallery18,gallery19,gallery20,
    gallery21,gallery22,gallery23,gallery24,gallery25,gallery26,gallery27,gallery28,gallery29,gallery30,
    gallery31,gallery32,gallery33,gallery34,gallery35,gallery36,gallery37,gallery38,gallery39,gallery40,
    gallery41,gallery42,gallery43,gallery44,gallery45,gallery46,gallery47,gallery48,gallery49,gallery50,
    gallery51,gallery52,gallery53,gallery54,gallery55,gallery56,gallery57,
  ];

  constructor() {
    super();

    this.state = {
      expandable: -1,
    };
  }

  closeExpandable = () => this.setState({ expandable: -1 });

  expandImage = index => this.setState({ expandable: index });

  nextImage = () => this.setState({ expandable: this.state.expandable >= Gallery.GALLERY_PICTURES.length - 1 ? 0 : this.state.expandable + 1 });

  prevImage = () => this.setState({ expandable: this.state.expandable <= 0 ? Gallery.GALLERY_PICTURES.length - 1 : this.state.expandable - 1 });

  render() {
    return (
      <Wrapper>
        {this.state.expandable >= 0 && (
          <ImageZoomModal
            src={Gallery.GALLERY_PICTURES[this.state.expandable]}
            onClose={this.closeExpandable}
            onNext={this.nextImage}
            onPrev={this.prevImage}
          />
        )}
        <NavigationBar />
        <HeaderBg src={GalleryHeaderBgImg} />
        <Content>
          <HeaderText>
            <h1>GALERI</h1>
            <p>
            Portofolio hasil produksi dengan mitra kami, meliputi produk fashion label, seragam instansi, souvenir event hingga baju komunitas.
            </p>
          </HeaderText>
          <Pictures>
            {Gallery.GALLERY_PICTURES.map((glr, index) => (
              <Picture>
                <img src={glr} />
                <button onClick={() => this.expandImage(index)}>
                  <span>PERBESAR</span>
                </button>
              </Picture>
            ))}
          </Pictures>
        </Content>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: ${props => props.theme.sizing.containerMaxWidth};
  margin: 4rem auto;
  min-height: calc(100vh - 13rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;

  ${media('tablet')} {
    margin-top: 0;
  }
`;

const HeaderBg = styled.img`
  position: absolute;
  z-index: 0;
  top: 13rem;
  left: 0;
  width: calc(30% + 8rem);
  height: 8rem;
  box-shadow: ${props => props.theme.shadow.regular};

  ${media('tablet')} {
    width: 100%;
    top: 6.5rem;
  }
`;

const HeaderText = styled.div`
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  ${media('tablet')} {
    width: 100%;
    padding: 0 2rem;
  }

  h1 {
    width: 100%;
    margin: 2.5rem 0 4rem;
    font-size: 3rem;
    text-align: left;
    color: ${props => props.theme.color.white};

    ${media('tablet')} {
      text-align: center;
    }
  }

  p {
    font-size: 1.125rem;
    line-height: 1.4;
    color: ${props => props.theme.color.dark};

    ${media('tablet')} {
      text-align: center;
      margin-bottom: 2rem;
    }
  }
`;

const Pictures = styled.div`
  width: calc(70% - 4rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  ${media('tablet')} {
    width: 100%;
    padding: 0 2rem;
  }
`;

const Picture = styled.div`
  width: calc((100% - 4rem) / 3);
  margin: 0 2rem 2rem 0;
  height: 12rem;
  position: relative;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow.regular};
  border-radius: 0.5rem;

  ${media('tablet')} {
    width: 100%;
    margin: 0 0 2rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &:nth-of-type(3n) {
    margin: 0 0 2rem;
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
