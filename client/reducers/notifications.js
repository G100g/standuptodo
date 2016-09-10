import { ADD_NOTIFICATION, NOTIFICATION_AVAILABLE, NOTIFICATION_NOT_AVAILABLE, GET_NOTIFICATION } from '../actions/';

const notifications = (state = { active: false, next: null, available: false }, action) => {

  switch (action.type) {

    case ADD_NOTIFICATION:

      // Set a new reminder
      return Object.assign({}, state, { next: action.timeout });

    case GET_NOTIFICATION:

      console.log(action.notification);

      // Set a new reminder
      return Object.assign({}, state, { next: action.notification.next });

    case NOTIFICATION_AVAILABLE:

      return Object.assign({}, state, { available: true });

    case NOTIFICATION_NOT_AVAILABLE:

      return Object.assign({}, state, { available: false });

    default:
      return state;

  }
};

export default notifications;
