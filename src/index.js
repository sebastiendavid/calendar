import 'babel-polyfill';
import './index.scss';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from 'calendar/store/configureStore';
import Header from 'calendar/header';
import moment from 'moment';
import Month from 'calendar/views/month';
import React from 'react';

const store = configureStore({});
moment.locale((navigator || {}).language || 'en');

render((
  <Provider store={store}>
    <main className="MainLayout">
      <Header />
      <Month />
    </main>
  </Provider>
), document.getElementById('main'));
