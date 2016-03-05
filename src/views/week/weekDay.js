import './weekDay.scss';
import React, { Component, PropTypes } from 'react';

export default class WeekDay extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired
  };

  render() {
    const { date } = this.props;
    return (
      <li className="WeekDay">
        <header className="WeekDay__header">
          <span className="WeekDay__name">{date.format('ddd')}</span>
          <span className="WeekDay__num">{date.format('D')}</span>
        </header>
      </li>
    );
  }
}
