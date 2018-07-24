import 'sanitize.css/sanitize.css';
import './assets/fonts/stylesheet.css';

import { injectGlobal } from 'styled-components';
import theme, { media } from './commons/theme';

injectGlobal`
  html {
    font-family: ${theme.font.body};
    font-size: 16px;
    background: ${theme.color.white};
    color: ${theme.color.black};
    min-height: 100vh;
  }

  body {
    box-sizing: border-box;
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 1;
  }

  h1,
  h2,
  h3 {
    font-family: ${theme.font.headingOne};
  }

  h4,
  h5,
  h6 {
    font-family: ${theme.font.headingTwo};
  }

  p {
    margin: 0;
  }

  button {
    margin: 0;
    padding: 0;
    font-family: ${theme.font.headingOne};
    border: none;
    &:hover,
    &:focus {
      cursor: pointer;
      outline: none;
    }
  }

  input,
  textarea {
    font-family: ${theme.font.heading};
  }

  .swal-overlay {
    background-color: rgba(55, 55, 55, 0.75);
  }

  .swal-modal {
    background-color: ${theme.color.pure};
  }

  .swal-title,
  .swal-text {
    font-family: ${theme.font.heading};
    text-align: center;
  }

  .swal-button-container,
  .swal-button {
    width: 100%;
  }

  .swal-footer {
    background: ${theme.color.white};
  }

  .swal-button {
    background: ${theme.color.blue};
  }
`;
