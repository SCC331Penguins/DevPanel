import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Login from './app/screens/Login';
import Dashboard from './app/screens/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import './assets/css/style.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/Dashboard" component={Dashboard} />
  </Router>,
  document.getElementById('container')
);
