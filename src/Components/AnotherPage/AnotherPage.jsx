import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../../actions/counterActions';

export default class Main extends Component {
	componentWillMount () {
		if (isBrowser) {
			console.log("Hello client");
		} else {
			console.log("Hello server");
		}
	}

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

export default connect(mapStateToProps, { increment, decrement })(Main);

