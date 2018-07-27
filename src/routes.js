import React from 'react';
import { Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Add more of your components here
import Home from './containers/Home';
import About from './containers/About';
import NotFound from './containers/NotFound';

const authenticated = Component => {
  // put your authentication checker logic here
  // for example, here we check if we have our
  // JWT token stored in the localStorage or not
  // Signifying that the user have logged in or not
  const { token } = window.localStorage;

  if (token) {
    return <Component />;
  }

  return <Redirect to={SITEMAP.login} />;
};

const unAuthenticated = Component => {
  // put your authentication checker logic here
  // for example, here we check if we have our
  // JWT token stored in the localStorage or not
  // Signifying that the user have logged in or not
  const { token } = window.localStorage;

  if (token) {
    return <Redirect to={SITEMAP.index} />;
  }

  return <Component />;
};

// add your sitemap here
export const SITEMAP = {
  index: '/',
  about: '/tentang-kami',
  product: '/produk',
  faq: '/faq',
  galery: '/galeri',
  order: '/pemesanan',
};

export const history = createHistory();

// don't forget to add your components and their respective routing here.
export default [
  {
    exact: true,
    path: SITEMAP.index,
    render: () => unAuthenticated(Home),
  },
  {
    exact: true,
    path: SITEMAP.about,
    render: () => unAuthenticated(About),
  },
  {
    path: '*',
    component: NotFound,
  },
];
