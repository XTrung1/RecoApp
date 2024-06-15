import actionTypes from "../action/actionType";

const initalState = {
  count: 0,
};

const handleCounter = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default handleCounter;
