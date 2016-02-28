import 'babel-polyfill';
import './index.scss';
import { browserHistory, IndexRedirect, Redirect, Route, Router } from 'react-router';
import { DAY_ROUTE, MONTH_ROUTE, WEEK_ROUTE } from 'calendar/constants/routes';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from 'calendar/app';
import configureStore from 'calendar/store/configureStore';
import Day from 'calendar/views/day';
import moment from 'moment';
import Month from 'calendar/views/month';
import React from 'react';
import Week from 'calendar/views/week';

const store = configureStore({});
moment.locale((navigator || {}).language || 'en');

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to={MONTH_ROUTE} />
        <Route path={DAY_ROUTE} component={Day} />
        <Route path={MONTH_ROUTE} component={Month} />
        <Route path={WEEK_ROUTE} component={Week} />
        <Redirect from="*" to={MONTH_ROUTE} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('main'));
