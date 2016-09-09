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
export const addNotification = () => {
  return {
    type: ADD_NOTIFICATION,
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
