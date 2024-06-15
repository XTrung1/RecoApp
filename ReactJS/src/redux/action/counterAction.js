import actionTypes from "./actionType";

export const increaseC = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decreaseC = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};
