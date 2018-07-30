import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';

import LogoFaceImage from '../../assets/logoface.png';
import GalleryHeaderBgImg from '../../assets/gallery-header-bg.jpg';

import { media } from '../../commons/theme';

import ImageZoomModal from '../../components/ImageZoomModal';
import NavigationBar from '../../components/NavigationBar';

export default class Gallery extends React.Component {
  static GALLERY_PICTURES = [
    {
      src: 'https://marketingweek.imgix.net/content/uploads/2017/03/23130329/Coca-cola_750.jpg',
      captionText: 'Coca Cola'
    },
    {
      src: 'http://images.marketing-interactive.com.s3.amazonaws.com/wp-content/uploads/2017/04/Pepsi-700x420.jpg',
      captionText: 'Pepsi'
    },
    {
      src: 'https://marketingweek.imgix.net/content/uploads/2017/03/23130329/Coca-cola_750.jpg',
      captionText: 'Coca Cola'
    },
    {
      src: 'http://images.marketing-interactive.com.s3.amazonaws.com/wp-content/uploads/2017/04/Pepsi-700x420.jpg',
      captionText: 'Pepsi'
    },
    {
      src: 'https://marketingweek.imgix.net/content/uploads/2017/03/23130329/Coca-cola_750.jpg',
      captionText: 'Coca Cola'
    },
    {
      src: 'http://images.marketing-interactive.com.s3.amazonaws.com/wp-content/uploads/2017/04/Pepsi-700x420.jpg',
      captionText: 'Pepsi'
    },
    {
      src: 'https://marketingweek.imgix.net/content/uploads/2017/03/23130329/Coca-cola_750.jpg',
      captionText: 'Coca Cola'
    },
    {
      src: 'http://images.marketing-interactive.com.s3.amazonaws.com/wp-content/uploads/2017/04/Pepsi-700x420.jpg',
      captionText: 'Pepsi'
    },
    {
      src: 'https://marketingweek.imgix.net/content/uploads/2017/03/23130329/Coca-cola_750.jpg',
      captionText: 'Coca Cola'
    },
    {
      src: 'http://images.marketing-interactive.com.s3.amazonaws.com/wp-content/uploads/2017/04/Pepsi-700x420.jpg',
      captionText: 'Pepsi'
    },
    {
      src: 'https://marketingweek.imgix.net/content/uploads/2017/03/23130329/Coca-cola_750.jpg',
      captionText: 'Coca Cola'
    },
    {
      src: 'http://images.marketing-interactive.com.s3.amazonaws.com/wp-content/uploads/2017/04/Pepsi-700x420.jpg',
      captionText: 'Pepsi'
    },
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
            {...Gallery.GALLERY_PICTURES[this.state.expandable]}
            onClose={this.closeExpandable}
            onNext={this.nextImage}
            onPrev={this.prevImage}
          />
        )}
        <Headroom>
          <NavigationBar />
        </Headroom>
        <HeaderBg src={GalleryHeaderBgImg} />
        <Content>
          <HeaderText>
            <h1>GALERI</h1>
            <p>
              Adipiscing lacus fusce per aliquet vestibulum eu ipsum mollis praesent hendrerit condimentum rhoncus sociis a a id ultricies suspendisse a a ligula consectetur velit faucibus.
            </p>
          </HeaderText>
          <Pictures>
            {Gallery.GALLERY_PICTURES.map((glr, index) => (
              <Picture>
                <img src={glr.src} />
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
