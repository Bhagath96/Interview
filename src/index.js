import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import * as serviceWorker from './serviceWorker';
import NewsPage from './Views/home.js';
import DetailedPage from './Views/detailedPage.js';
import { Provider } from 'react-redux';
import store from './store';

const hist = createBrowserHistory();
ReactDOM.render(
  <div>
  <Provider store={store}>
  <Router history={hist}>
    <Switch>     
      <Route path="/NewsPage" component={NewsPage} />
      <Route path="/DetailedPage/:id" component={DetailedPage} />
      <Redirect from="/" to="/NewsPage" />
      </Switch>
  </Router>
  </Provider></div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
