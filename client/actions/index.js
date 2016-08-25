
export const addActivity = (text, date) => {
  return {
    type: 'ADD_ACTIVITY',
    value: text,
    date: date
  };
};


export const deleteActiviy = (id) => {
  return {
    type: 'DELETE_ACTIVITY',
    value: id,
  };
};
