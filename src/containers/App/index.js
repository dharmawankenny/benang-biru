import React, { Component, Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { Provider } from 'unstated';

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
            />
            <Switch>{routes.map(route => <Route key={route.path} {...route} />)}</Switch>
            <Footer />
          </Provider>
        </Router>
      </ThemeProvider>
    );
  }
}
