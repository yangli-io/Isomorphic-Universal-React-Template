import React, { Component } from "react";
import { Link } from 'react-router';

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
				<h2>Counter App</h2>
				<Link to="/anotherpage">Counter</Link>
				{this.props.children}
			</div>
		);
	}
}

