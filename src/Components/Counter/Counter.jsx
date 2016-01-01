import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, initialize } from '../../actions/counterActions';

export class Counter extends Component {
	static contextTypes = {
		store: PropTypes.object
	}

	componentWillMount() {
		initialize(this.context.store);
	}

	render () {
		const { store } = this.context;
		return (
			<div>
				<div>{this.props.value}</div>
				<button onClick={() => {increment(store)}}>+</button>
				<button onClick={decrement.bind(null, store)}>-</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		value: state.counter.value
	}
}

export default connect(mapStateToProps)(Counter);

