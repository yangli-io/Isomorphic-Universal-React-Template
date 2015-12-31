import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, initialize } from '../../actions/counterActions';

export class AnotherPage extends Component {
	static contextTypes = {
		store: PropTypes.object
	}

	componentWillMount() {
		if (!isBrowser) initialize(this.context.store);
	}

	render () {
		const { store } = this.context;
		if (this.props.value === 1 || this.props.value === 2) {
			//Round trip async calls also work
			initialize(store)
		};
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

export default connect(mapStateToProps)(AnotherPage);

