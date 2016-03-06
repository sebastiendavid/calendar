import './layout.scss';
import React, { PropTypes } from 'react';
import Header from 'calendar/header';

export default Object.assign(({ children }) => (
  <div className="Layout">
    <Header />
    {children}
  </div>
), {
  propTypes: {
    children: PropTypes.any
  }
});
