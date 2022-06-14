const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE": {
      // const count = state.count + 1;
      // return { ...state, count };
      return state + 1;
    }
    case "DECREASE": {
      // const count = state.count - 1;
      // return { ...state, count };
      return state - 1;
    }
    default:
      return state;
  }
};

export default countReducer;
