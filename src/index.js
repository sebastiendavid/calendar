import 'babel-polyfill';
import './index.scss';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import Bar from 'calendar/foo/bar';
import React from 'react';
import configureStore from 'calendar/store/configureStore';

const store = configureStore({});

render((
  <Provider store={store}>
    <div className="hello">
      <Bar />
    </div>
  </Provider>
), document.getElementById('main'));
