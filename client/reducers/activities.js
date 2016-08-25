const password = (state = [], action) => {

  switch (action.type) {

    case 'ADD_ACTIVITY':

      // Apply password transformation

      const activity = {
        title: action.value,
        date: action.date,
        id: action.date.getTime(),
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

    default:
      return state;

  }
};

export default password;
