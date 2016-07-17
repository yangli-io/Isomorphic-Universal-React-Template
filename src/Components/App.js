import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  render() {
    return (
      <div>
        <h2>Counter App</h2>
        <Link to="/counter">Counter</Link>
        {this.props.children}
      </div>
    );
  }
}

