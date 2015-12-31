import 'babel-polyfill';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import reducers from './reducers/reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import async from './async/async';

const reducer = combineReducers(Object.assign({}, reducers, {
	routing: routeReducer
}));

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export function instantiateStore(initialState) {
	const store = new createStoreWithMiddleware(reducer, initialState);
	store.async = new async();
	if (isBrowser) syncReduxAndRouter(history, store);
	return store;
}

export const history = isBrowser ? createBrowserHistory() : { listen: () => {} };
