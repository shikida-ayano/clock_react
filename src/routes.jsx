import React, { Component } from 'react';
import { IndexRoute, Router, Route } from 'react-router';
import { history } from './store';

import Layout from './containers/Layout';
import Top from './containers/Top';
import List from './containers/List';
import Time from './containers/Time';


class Routes extends Component {
  render() {
    return (
      <Router history={history} >
        <Route path="/" component={Layout} >
          <IndexRoute component={Top} />
          <Route path="/" component={Top} />
          <Route path="/list" component={List} />
          <Route path="/time" component={Time} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
