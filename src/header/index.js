import './header.scss';
import { DAY_ROUTE, MONTH_ROUTE, WEEK_ROUTE } from 'calendar/constants/routes';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { next, previous } from 'calendar/views/navigate';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import FontIcon from 'material-ui/lib/font-icon';
import moment from 'moment';
import RaisedButton from 'material-ui/lib/raised-button';
import React, { Component, PropTypes } from 'react';

class Header extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    month: PropTypes.string.isRequired
  };

  constructor() {
    super();
    this.navNext = this.navNext.bind(this);
    this.navPrevious = this.navPrevious.bind(this);
  }

  navNext() {
    this.props.dispatch(next());
  }

  navPrevious() {
    this.props.dispatch(previous());
  }

  render() {
    const { month } = this.props;
    return (
      <header className="Header Layout__header">
        <div className="Header__info">
          <div className="Header__date">
            <FontIcon className="Header__icon material-icons">date_range</FontIcon>
            <span className="Header__today">{moment(month).format('MMMM YYYY')}</span>
          </div>
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
          <li className="Header__link Header__link--nav">
            <FloatingActionButton onMouseDown={this.navPrevious} primary mini>
              <FontIcon className="material-icons">navigate_before</FontIcon>
            </FloatingActionButton>
          </li>
          <li className="Header__link Header__link--nav">
            <FloatingActionButton onMouseDown={this.navNext} primary mini>
              <FontIcon className="material-icons">navigate_next</FontIcon>
            </FloatingActionButton>
          </li>
        </ul>
      </header>
    );
  }
}

export default connect((state) => {
  const { views } = state;
  return {
    month: views.get('month')
  };
})(Header);
