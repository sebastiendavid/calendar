import React, { Component } from 'react';

export default class Bar extends Component {
  constructor() {
    super();
    const list = [];
    for (let n = 0; n < 10; n++) {
      list.push('item');
    }
    this.state = { list };
  }

  renderList(label, index) {
    return (
      <li key={index}>{`${label} ${index}`}</li>
    );
  }

  render() {
    return (
      <ul>
        {this.state.list.map(this.renderList)}
      </ul>
    );
  }
}
