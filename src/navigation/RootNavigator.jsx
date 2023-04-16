import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Account from './pages/Account';
import Login from './pages/Login';
import Unauthorized from './pages/Unauthorized';

function RootNavigator() {
  const isAuthenticated = /* check if user is authenticated, e.g. by checking for a token in localStorage or a cookie */;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <Home /> : <Redirect to="/unauthorized" />}
        </Route>
        <Route exact path="/account">
          {isAuthenticated ? <Account /> : <Redirect to="/unauthorized" />}
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/unauthorized" component={Unauthorized} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default RootNavigator;
