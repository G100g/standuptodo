import { ADD_NOTIFICATION, NOTIFICATION_AVAILABLE, NOTIFICATION_NOT_AVAILABLE } from '../actions/';

const notifications = (state = [], action) => {

  switch (action.type) {

    case ADD_NOTIFICATION:

      // Set a new reminder

      return state;

    case NOTIFICATION_AVAILABLE:

      return Object.assign(state, { available: true });

    case NOTIFICATION_NOT_AVAILABLE:

      return Object.assign(state, { available: false });

    default:
      return state;

  }
};

export default notifications;
