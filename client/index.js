import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

// This wire store to root components tree
import { Provider } from 'react-redux';

import store, { history } from './store';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppContainer from './components/AppContainer';
import DailyList from './components/DailyList';
import AddForm from './components/AddForm';

import NotEngine from './libs/notifications';

NotEngine.setup();

import 'normalize.css';
import './styles/base.scss';

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={DailyList} />
          <Route path="/add" component={AddForm} />
        </Route>
      </Router>

    </MuiThemeProvider>
  </Provider>,

  document.getElementById('root')
);
