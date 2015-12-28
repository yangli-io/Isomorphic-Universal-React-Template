import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import reducers from './reducers/reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers(Object.assign({}, reducers, {
	routing: routeReducer
}));

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export const store = createStoreWithMiddleware(reducer);

export const history = isBrowser ? createBrowserHistory() : { listen: () => {} };

syncReduxAndRouter(history, store);
