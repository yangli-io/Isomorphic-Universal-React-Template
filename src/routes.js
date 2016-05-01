import React from 'react';
import App from './Components/App';
import { Route } from 'react-router';
import Counter from './Components/Counter/Counter';

export default <Route path="/" component={App}>
  <Route path="counter" component={Counter} />
</Route>;
