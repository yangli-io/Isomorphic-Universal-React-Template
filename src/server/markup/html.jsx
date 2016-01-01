import React, { Component, PropTypes } from 'react';

export default class HTML extends Component {
	static propTypes = {
		markup: PropTypes.string.isRequired,
		initialState: PropTypes.object.isRequired,
		assetPath: PropTypes.string.isRequired
	}

	render() {
		const { markup, initialState, assetPath } = this.props;
		const initialStateString = `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};`;
		return (
			<html lang="en-us">
				<head>
					<meta charset="utf-8" />
					<title>react-isomorphic-starterkit</title>
					<link rel="shortcut icon" href="/favicon.ico" />
					<link rel="stylesheet" href={`${assetPath}/dist/style.css`} />
				</head>
				<body>
					<div id="root" dangerouslySetInnerHTML={{__html: markup}}></div>
					<script dangerouslySetInnerHTML={{__html: initialStateString}}></script>
					<script src={`${assetPath}/dist/client.js`}></script>
				</body>
			</html>
		)
	}
}
