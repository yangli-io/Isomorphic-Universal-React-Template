import React from 'react';
import App from 'components/App';
import {Router, Route} from 'react-router';
import history from './shared';
import AnotherPage from './components/AnotherPage/AnotherPage';

export default (
	<Route path="/" component={App}>
		<Route path="anotherpage" component={AnotherPage}></Route>
	</Route>
)
