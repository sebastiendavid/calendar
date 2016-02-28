import './header.scss';
import moment from 'moment';
import React, { Component } from 'react';
import Time from 'calendar/header/time';

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Header__date">{ moment().format('LL') }</div>
        <Time />
      </header>
    );
  }
}
