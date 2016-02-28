import './header.scss';
import { DAY_ROUTE, MONTH_ROUTE, WEEK_ROUTE } from 'calendar/constants/routes';
import { Link } from 'react-router';
import FontIcon from 'material-ui/lib/font-icon';
import moment from 'moment';
import RaisedButton from 'material-ui/lib/raised-button';
import React, { Component } from 'react';
import Time from 'calendar/header/time';

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Header__info">
          <div className="Header__date">
            <FontIcon className="Header__icon material-icons">date_range</FontIcon>
            <span className="Header__today">{ moment().format('LL') }</span>
          </div>
          <Time />
        </div>
        <ul className="Header__navbar">
          <li className="Header__link">
            <Link to={DAY_ROUTE} className="Header__routerLink">
              <RaisedButton label="Day" secondary />
            </Link>
          </li>
          <li className="Header__link">
            <Link to={WEEK_ROUTE} className="Header__routerLink">
              <RaisedButton label="Week" secondary />
            </Link>
          </li>
          <li className="Header__link">
            <Link to={MONTH_ROUTE} className="Header__routerLink">
              <RaisedButton label="Month" secondary />
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}
