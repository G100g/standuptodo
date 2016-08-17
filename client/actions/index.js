
export const addActivity = (text) => {
  return {
    type: 'ADD_ACTIVITY',
    value: text,
  };
};


export const deleteActiviy = (id) => {
  return {
    type: 'DELETE_ACTIVITY',
    value: id,
  };
};
