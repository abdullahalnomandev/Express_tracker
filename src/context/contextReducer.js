const contextReducer = (state, action) => {
  let transition;
  switch (action.type) {
    case "DELETE_TRANSITION":
      console.log("action", action);
      transition = state.filter((tr) => tr.id !== action.payLoad);
      return transition;

    case "ADD_TRANSITION":
      transition = [...state, action.payLoad];
      return transition;
    default:
      return state;
  }
};

export default contextReducer;
