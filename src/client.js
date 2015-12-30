import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import {Router, Route} from 'react-router';
import App from 'components/App';
import AnotherPage from './components/AnotherPage/AnotherPage';
import { history, instantiateStore } from './shared';
import Routes from './routes';

const initialState = window.__INITIAL_STATE__;
const store = instantiateStore(initialState);

const Client = (
	<Provider store={store}>
		<Router history={history}>
			{ Routes }
		</Router>
	</Provider>
);

const reactRoot = window.document.getElementById('root');
render(Client, reactRoot);

if (process.env.NODE_ENV !== 'production') {
	if (!reactRoot.firstChild || !reactRoot.firstChild.attributes ||
	    !reactRoot.firstChild.attributes['data-react-checksum']) {
		console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
	}
}

