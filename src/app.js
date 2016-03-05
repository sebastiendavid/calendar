import './layout.scss';
import React, { Component, PropTypes } from 'react';
import Header from 'calendar/header';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };

  render() {
    return (
      <div className="Layout">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
