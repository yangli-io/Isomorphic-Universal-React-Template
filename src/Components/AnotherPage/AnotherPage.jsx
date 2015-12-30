import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, initialize } from '../../actions/counterActions';

export class AnotherPage extends Component {
	static contextTypes = {
		store: PropTypes.object
	}

	componentWillMount() {
		console.log('wootz');
		if (!isBrowser) initialize.bind(this.context.store)();
	}

	render () {
		const { store } = this.context;
		return (
			<div>
				<div>{this.props.value}</div>
				<button onClick={increment.bind(store)}>+</button>
				<button onClick={decrement.bind(store)}>-</button>
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

