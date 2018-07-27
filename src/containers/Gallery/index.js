import React from 'react';
import styled from 'styled-components';

import LogoFaceImage from '../../assets/logoface.png';
import GalleryHeaderBgImg from '../../assets/gallery-header-bg.jpg';

import { media } from '../../commons/theme';

import NavigationBar from '../../components/NavigationBar';

export default class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      expandable: '',
    };
  }

  GALLERY_PICTURES = [
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
    'https://www.qerja.com/journal/wp-content/uploads/teknopedia-kantor-traveloka-5720b87f467e6.jpg',
  ];

  closeExpandable = () => this.setState({ expandable: '' });

  expandImage = url => this.setState({ expandable: url });

  render() {
    return (
      <Wrapper>
        {this.state.expandable !== '' &&
          <Expandable>
            <button onClick={this.closeExpandable}>X</button>
            <img src={this.state.expandable} />
          </Expandable>}
        <NavigationBar />
        <HeaderBg src={GalleryHeaderBgImg} />
        <Content>
          <HeaderText>
            <h1>GALERI</h1>
            <p>
              Adipiscing lacus fusce per aliquet vestibulum eu ipsum mollis praesent hendrerit condimentum rhoncus sociis a a id ultricies suspendisse a a ligula consectetur velit faucibus.
            </p>
          </HeaderText>
          <Pictures>
            {this.GALLERY_PICTURES.map(url => (
              <Picture>
                <img src={url} />
                <button onClick={() => this.expandImage(url)}>
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
`;

const Expandable = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 4rem;

  img {
    width: 100%;
    height: 100%;
    border: 1rem solid ${props => props.theme.color.white};
    object-fit: cover;
  }

  button {
    position: absolute;
    z-index: 2;
    top: 2.5rem;
    right: 2.5rem;
    width: 3.5rem;
    height: 3.5rem;
    padding: 0.65rem 0;
    font-size: 1.5rem;
    line-height: 1;
    text-align: center;
    color: ${props => props.theme.color.dark};
    background: ${props => props.theme.color.white};
    border: 0.5rem solid ${props => props.theme.color.dark};
    border-radius: 4rem;
    transition: 0.25s ease all;

    &:hover {
      color: ${props => props.theme.color.white};
      background: ${props => props.theme.color.red};
      border-color: ${props => props.theme.color.white};
      transition: 0.25s ease all;
    }
  }
`;

const HeaderBg = styled.img`
  position: absolute;
  z-index: 0;
  top: 13rem;
  left: 0;
  width: calc(40% + 4rem);
  height: 8rem;
`;

const HeaderText = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  h1 {
    width: 100%;
    margin: 2.5rem 0 4rem;
    font-size: 3rem;
    text-align: left;
    color: ${props => props.theme.color.white};
  }

  p {
    font-size: 1.125rem;
    line-height: 1.4;
    color: ${props => props.theme.color.dark};
  }
`;

const Pictures = styled.div`
  width: calc(60% - 4rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`;

const Picture = styled.div`
  width: calc((100% - 4rem) / 3);
  margin: 0 2rem 2rem 0;
  height: 12rem;
  position: relative;
  overflow: hidden;

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
