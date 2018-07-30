import React, { Component, Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { Provider } from 'unstated';

import FaviconIco from '../../assets/favicon/favicon.ico';
import AppleTouchIconImg from '../../assets/favicon/apple-touch-icon.png';
import Favicon16x16Img from '../../assets/favicon/favicon-16x16.png';
import Favicon32x32Img from '../../assets/favicon/favicon-32x32.png';
import SafariPinnedTabImg from '../../assets/favicon/safari-pinned-tab.svg';

import theme from '../../commons/theme';

import Footer from '../../components/Footer';

import AuthState from '../../states/AuthState';

import routes, { history } from '../../routes';

const authState = new AuthState();

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Provider inject={[authState]}>
            <Helmet
              titleTemplate="%s - Benang Biru"
              defaultTitle="Benang Biru"
              meta={[
                { name: 'description', content: 'Benang Biru' },
                { name: 'apple-mobile-web-app-title', content: 'Benang Biru' },
                { name: 'application-name', content: 'Benang Biru' },
                { name: 'theme-color', content: '#FAFAFA' },
              ]}
            >
              <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIconImg} />
              <link rel="icon" type="image/x-icon" href={FaviconIco} />
              <link rel="icon" type="image/png" sizes="32x32" href={Favicon32x32Img} />
              <link rel="icon" type="image/png" sizes="16x16" href={Favicon16x16Img} />
              <link rel="mask-icon" href={SafariPinnedTabImg} color="#00a8da" />
              <meta name="msapplication-TileColor" content="#ffffff" />
              <meta name="theme-color" content="#ffffff" />
            </Helmet>
            <Switch>{routes.map(route => <Route key={route.path} {...route} />)}</Switch>
            <Footer />
          </Provider>
        </Router>
      </ThemeProvider>
    );
  }
}
