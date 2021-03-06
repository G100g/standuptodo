import { DELETE_ACTIVITY } from '../actions';
import moment from 'moment';
const activities = (state = [], action) => {
  switch (action.type) {

    case 'ADD_ACTIVITY':

      // Apply password transformation

      let activity = {
        title: action.value,
        date: moment(action.date).toISOString(),
        id: '' + action.date.getTime(),
      };

      const newState = state.splice(0);
      newState.push(activity);

      return newState;
      // return Object.assign({}, state, { result: saltedPassword, password: action.value });
    //
    // case 'UPDATE_DOMAIN':
    //
    //   // Apply password transformation
    //
    //   if (action.value) {
    //     saltedPassword = buildPassword(state.password, action.value);
    //   }
    //
    //   return { ...state, result: saltedPassword, domain: action.value };
    //   // return Object.assign({}, state, { result: saltedPassword, domain: action.value });

    case 'SAVE_ACTIVITY':

      let edited_activity = {
        title: action.value,
        date: moment(action.date).toISOString(),
        id: '' + action.date.getTime(),
      };

      // Remove current activity with id

      const activities = state.filter((activity) => {
        return activity.id !== action.id;
      });

      activities.push(edited_activity);

      return activities;

    case DELETE_ACTIVITY:
console.log(action.id);
      const deleted_activities = state.filter((activity) => {
        return activity.id !== action.id;
      });

      return deleted_activities;

    default:
      return state;

  }
};

export default activities;
