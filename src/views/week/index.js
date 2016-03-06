import './week.scss';
import { connect } from 'react-redux';
import moment from 'moment';
import React, { Component, PropTypes } from 'react';
import Day from 'calendar/views/week/weekDay';

class Week extends Component {
  static propTypes = {
    week: PropTypes.string.isRequired
  };

  constructor(args) {
    super(args);
    this.renderDay = this.renderDay.bind(this);
  }

  processWeek() {
    const date = moment(this.props.week);
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
    return (
      <section className="Week Layout__content">
        <ul className="Week__days">
          {this.processWeek().map(this.renderDay)}
        </ul>
      </section>
    );
  }
}

export default connect((state) => {
  const { views } = state;
  return {
    week: views.get('week')
  };
})(Week);
