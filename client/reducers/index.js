import { combineReducers } from 'redux';
import activities from './activities';
import notifications from './notifications';
import { routerReducer } from 'react-router-redux'; // we need this for react-router

// Reducers list (just one for now)
const MainApp = combineReducers({
  activities,
  notifications,
  routing: routerReducer,
});

export default MainApp;
