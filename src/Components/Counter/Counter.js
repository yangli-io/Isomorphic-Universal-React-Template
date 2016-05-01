import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, initialize } from '../../actions/counterActions';

export class Counter extends Component {
  static propTypes = {
    value: PropTypes.number
  };

  static contextTypes = {
    store: PropTypes.object
  };

  componentWillMount() {
    initialize(this.context.store);
  }

  render() {
    let bingoClass = '';

    if (this.props.value === 5) {
      bingoClass = 'counter__status--bingo';
    }

    const { store } = this.context;
    return (
      <div className="counter">
        <div className={`counter__status ${bingoClass}`}>{this.props.value}</div>
        <button onClick={() => { increment(store); }}>+</button>
        <button onClick={decrement.bind(null, store)}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.counter.value
  };
}

export default connect(mapStateToProps)(Counter);

