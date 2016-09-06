import 'react-toolbox/lib/commons.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

// This wire store to root components tree
import { Provider } from 'react-redux';

import store, { history } from './store';

import AppContainer from './components/AppContainer';
import DailyList from './components/DailyList';
import AddForm from './components/AddForm';

import {MainNav,AddNav} from './components/AppNavs';

import NotEngine from './libs/notifications';
//
// NotEngine.setup();

NotEngine.init(store);

// import 'normalize.css';
import './styles/base.scss';

render(
  <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={AppContainer}>
          <IndexRoute components={{ main: DailyList, nav: MainNav}} />
          <Route path="/add" components={{ main: AddForm, nav: AddNav}} />
          <Route path="/edit/:id" components={{ main: AddForm, nav: AddNav}} />
        </Route>
      </Router>
  </Provider>,

  document.getElementById('root')
);
