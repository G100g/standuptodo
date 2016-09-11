import moment from 'moment';
import NotEngine from '../libs/notifications';

export const addActivity = (text, date) => ({
  type: 'ADD_ACTIVITY',
  value: text,
  date,
});

export const saveActivity = (id, value, date) => ({
  type: 'SAVE_ACTIVITY',
  value,
  date,
  id,
});

export const deleteActiviy = (id) => {
  return {
    type: 'DELETE_ACTIVITY',
    value: id,
  };
};

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const addNotification = (timeout) => {
  return {
    type: ADD_NOTIFICATION,
    timeout,
  };
};

export const ADDED_NOTIFICATION = 'ADDED_NOTIFICATION';
export const addedNotification = () => {
  return {
    type: ADDED_NOTIFICATION,
  };
};

export const ERROR_ADDING_NOTIFICATION = 'ERROR_ADDING_NOTIFICATION';
export const errorAddingNotification = () => {
  return {
    type: ERROR_ADDING_NOTIFICATION,
  };
};

export const NOTIFICATION_AVAILABLE = 'NOTIFICATION_AVAILABLE';
export const notificationAvailable = () => {
  return {
    type: NOTIFICATION_AVAILABLE,
  };
};

export const NOTIFICATION_NOT_AVAILABLE = 'NOTIFICATION_NOT_AVAILABLE';
export const notificationNotAvailable = () => ({
  type: NOTIFICATION_NOT_AVAILABLE,
});

export const GET_NOTIFICATION = 'GET_NOTIFICATION';

export const getNotitication = (notification) => ({
  type: GET_NOTIFICATION,
  notification
});

export const getNotiticationObject = function getNotiticationObject() {
  console.log('getNotiticationObject');
  return function (dispatch) {
    // add new notification in one hour
    // let timeout = moment().add(1, 'h').toDate();
    NotEngine.sendMessage({
      command: GET_NOTIFICATION,
    }).then(function (notification) {
      // If the promise resolves, just display a success message.
      // ChromeSamples.setStatus('Added to cache.');
      console.log('Notification getted', notification);

      dispatch(getNotitication(notification || { next: null }));
    }).catch((err) => {
      console.log('Error get notification', err);
      dispatch(getNotitication(null));
    }); // If t
  };
};



export const setNotitication = function setNotitication() {
  return function (dispatch) {
    // add new notification in one hour
    let timeout = moment().add(1, 'h').toDate();

    dispatch(addNotification(timeout));

    NotEngine.sendMessage({
      command: 'SET_NOTIFICATION',
      options: {
        next: timeout,
        timeout: 10 * 1000,
        title: 'What did you do last hour?',
        config: {
          // body: 'Bla bla bla',
          requireInteraction: true,
        },
      },
    }).then(function () {
      // If the promise resolves, just display a success message.
      // ChromeSamples.setStatus('Added to cache.');
      console.log('Messages sent');
      dispatch(addedNotification());
    }).catch((err) => {
      // console.log('Error send messgabe');
      console.error(err);
      dispatch(errorAddingNotification());
    }); // If t
  };
};

export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';

export const clearedNotitication = (notification) => ({
  type: CLEAR_NOTIFICATION,
  notification
});

export const clearNotitication = function clearNotitication() {
  return function (dispatch) {
    // add new notification in one hour

    NotEngine.sendMessage({
      command: CLEAR_NOTIFICATION,
    }).then(function () {
      // If the promise resolves, just display a success message.
      // ChromeSamples.setStatus('Added to cache.');
      console.log('Notification cleared');
      dispatch(clearedNotitication());
    }).catch((err) => {
      // console.log('Error send messgabe');
      console.error(err);
      dispatch(clearedNotitication());
    }); // If t
  };
};
