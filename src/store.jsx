import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middlewares = [
  thunk,
  routerMiddleware(browserHistory),
];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

export const store = createStore(
  reducer,
  applyMiddleware(...middlewares),
);

export const history = syncHistoryWithStore(browserHistory, store);
