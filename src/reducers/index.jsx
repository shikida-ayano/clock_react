import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import clock from './clock';

export default combineReducers({
  clock,
  routing: routerReducer,
});
