import React from 'react';
import styled from 'styled-components';

import FaqHeaderBgImg from '../../assets/faq-header-bg.jpg';
import BgDecoratorImg from '../../assets/bg-decorator.jpg';

import { media } from '../../commons/theme';

import Banner from '../../components/Banner';
import FaqAccordion from '../../components/FaqAccordion';
import NavigationBar from '../../components/NavigationBar';

export default class Faq extends React.Component {
  static QNA = [
    {
      question: 'Apakah saya bisa pesan dibawah jumlah minimum order?',
      answer: 'Untuk MOQ kami di 36pcs, apabila ada order dibawah 36pcs akan dikenakan charge (tambahan biaya) sesuai dengan jumlah yang di order.',
    },
    {
      question: 'Apakah saya bisa membuat sample terlebih dahulu?',
      answer: 'Bisa, pembuatan sample & proofing akan dikenakan biaya sesuai jenis produk. Apabila sample tersebut jadi diproduksi, maka biaya sample akan masuk langsung sebagai DP.',
    },
    {
      question: 'Apa saja yang harus saya siapkan ketika saya ingin memesan?',
      answer: 'Sebelumnya, konsultasikan dulu design dan spesifikasi produksi dengan CS Kami. Apabila semua sudah jelas dan lengkap, maka CS Kami akan memberikan penawaran harga. Yang harus disiapkan antara lain adalah file design High Resolution, bisa berupa png, pdf, psd, atau ai. Setelah itu anda bisa membayarkan DP sebesar 60% dari harga yang ditawarkan.',
    },
    {
      question: 'Berapa lama saya harus menunggu masa produksi?',
      answer: 'Rata-rata masa produksi adalah 14 hari kerja untuk produk kaos, terhitung dari tanggal DP masuk. Untuk masa produksi kaos dalam jumlah banyak, atau masa produksi produk lainnya bisa dikonfirmasi terlebih dahulu ke CS kami.',
    },
    {
      question: 'Bagaimana proses pengiriman ketika produk sudah selesai?',
      answer: 'Setelah produk selesai di packing dan siap untuk dikirim. Anda bisa memilih jasa ekspedisi seperti JNE, J&T, LEGA Paket, Indah Cargo, Herona Express, dll. Kami akan menginformasikan sisa tagihan dan biaya ongkir kepada anda. Barang akan dikirim setelah pelunasan kami terima.',
    },
  ];

  render() {
    return (
      <Wrapper>
        <NavigationBar />
        <Banner src={FaqHeaderBgImg} text="FAQ" />
        <Content>
          <Container>
            {Faq.QNA.map(qna => <FaqAccordion {...qna} />)}
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
