import actionTypes from "../action/actionType";

const initalState = {
  language: "vi",
};

const appReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    default:
      return state;
  }
};

export default appReducer;
