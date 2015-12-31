import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, initialize } from '../../actions/counterActions';

export class AnotherPage extends Component {
	static contextTypes = {
		store: PropTypes.object
	}

	componentWillMount() {
		if (!isBrowser) initialize.bind(this.context.store)();
	}

	render () {
		if (this.props.value === 1 || this.props.value === 2) {
			console.log(this.props.value);
			initialize.bind(this.context.store)()
		};
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

