import React, { Component } from "react";

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
			<div>hello world</div>
		);
	}
}

