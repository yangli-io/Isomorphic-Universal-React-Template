import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../../actions/counterActions';

export class AnotherPage extends Component {
	render () {
		return (
			<div>
				<div>{this.props.value}</div>
				<button onClick={this.props.increment}>+</button>
				<button onClick={this.props.decrement}>-</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		value: state.counter.value
	}
}

export default connect(mapStateToProps, { increment, decrement })(AnotherPage);

