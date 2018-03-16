import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Login from './app/screens/Login';
import Dashboard from './app/screens/Dashboard';
import Routers from './app/screens/Routers';
import {RouterBig} from './app/screens/Routers/individual';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import './assets/css/style.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/Routers" component={Routers} />
    <Route path="/Router/:rName" component={RouterBig} />
  </Router>,
  document.getElementById('container')
);
