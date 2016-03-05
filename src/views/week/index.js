import './week.scss';
import moment from 'moment';
import React, { Component } from 'react';
import Day from 'calendar/views/week/weekDay';

export default class Week extends Component {
  constructor(args) {
    super(args);
    const week = this.processWeek();
    this.state = {
      startOfWeek: week[0],
      endOfWeek: week[6],
      week
    };
    this.renderDay = this.renderDay.bind(this);
  }

  processWeek(date = moment().startOf('week')) {
    const week = [];
    for (let n = 0; n < 7; n++) {
      week.push(date.clone().add(n, 'days'));
    }
    return week;
  }

  renderDay(date) {
    return (
      <Day date={date} key={`WeekDay_${date.format('x')}`} />
    );
  }

  render() {
    const { endOfWeek, startOfWeek, week } = this.state;
    return (
      <section className="Week Layout__content">
        <header className="Week__header">{startOfWeek.format('LL')} - {endOfWeek.format('LL')}</header>
        <ul className="Week__days">
          {week.map(this.renderDay)}
        </ul>
      </section>
    );
  }
}
