
export const addActivity = (text, date) => {
  return {
    type: 'ADD_ACTIVITY',
    value: text,
    date: date
  };
};

export const saveActivity = (id, value, date) => {
  return {
    type: 'SAVE_ACTIVITY',
    value,
    date,
    id
  };
};

export const deleteActiviy = (id) => {
  return {
    type: 'DELETE_ACTIVITY',
    value: id,
  };
};
