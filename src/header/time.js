import moment from 'moment';
import React, { Component } from 'react';

const TIME_FORMAT = 'LT Z';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      time: moment().format(TIME_FORMAT)
    };
  }

  componentDidMount() {
    this.requestNextTime();
  }

  componentDidUpdate() {
    this.requestNextTime();
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  requestNextTime() {
    const now = moment();
    const next = moment().add(1, 'minutes').seconds(0).millisecond(0);
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      this.setState({
        time: moment().format(TIME_FORMAT)
      });
    }, next.diff(now));
  }

  render() {
    return (
      <span className="Time">{ this.state.time }</span>
    );
  }
}
