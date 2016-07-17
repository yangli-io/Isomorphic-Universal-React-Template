import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducers from './reducers/reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import async from './async/async';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}));

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export function instantiateStore(initialState) {
  const store = new createStoreWithMiddleware(reducer, initialState);
  store.async = new async();

  const hasHistory = isBrowser ? browserHistory : { listen: () => null };

  const history = syncHistoryWithStore(hasHistory, store);

  return {
    store,
    history
  };
}
