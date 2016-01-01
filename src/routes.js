import React from 'react';
import {Router, Route} from 'react-router';
import history from './shared';

export default (
	<Route path="/" component={App}>
		<Route path="counter" component={Counter}></Route>
	</Route>
)
