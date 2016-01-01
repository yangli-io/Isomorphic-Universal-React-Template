import React from 'react';
import {Router, Route} from 'react-router';
import history from './shared';
import Counter from 'components/Counter/Counter';

export default (
	<Route path="/" component={App}>
		<Route path="counter" component={Counter}></Route>
	</Route>
)
