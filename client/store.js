import localPackage from 'json!../package.json';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/';

import thunk from 'redux-thunk';
import { createHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux';
import { useRouterHistory, browserHistory } from 'react-router';

import { persistStore, autoRehydrate } from 'redux-persist';
import localForage from 'localForage';
import moment from 'moment';

/*
  Store
  Redux apps have a single store which takes
  1. All Reducers which we combined into `rootReducer`
  2. An optional starting state - similar to React's getInitialState
*/

const defaultState = {
  activities: [
              { title: 'Meeting with dev', id: '12345', date: moment().subtract(2, 'hour').toDate() },
              { title: 'Deploy new stuff', id: '654321', date: moment().subtract(1, 'hour').toDate() },
  ],
  notifications: { active: false, next: null, available: false }
};

const enhancers = compose(
  applyMiddleware(thunk),
  autoRehydrate(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

// const browserHistory = useRouterHistory(createHistory)({
//   basename: localPackage.name
// });

// we export history because we need it in `reduxstagram.js` to feed into <Router>
export const history = syncHistoryWithStore(browserHistory, store);

persistStore(store, {
  whitelist: ['activities'],
  storage: localForage,
});

/*
  Enable Hot Reloading for the reducers
  We re-require() the reducers whenever any new code has been written.
  Webpack will handle the rest
*/

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
