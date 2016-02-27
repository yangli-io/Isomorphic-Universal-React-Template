import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
  componentWillMount () {
    if (isBrowser) {
      console.log('Hello client'); //eslint-disable-line
    } else {
      console.log('Hello server'); //eslint-disable-line
    }
  }

  render () {
    return (
      <div>
        <h2>Counter App</h2>
        <Link to="/counter">Counter</Link>
        {this.props.children}
      </div>
    );
  }
}

