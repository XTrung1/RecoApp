import actionTypes from "./actionType";

export const changLanguageApp = (languageInput) => {
  return {
    type: actionTypes.CHANGE_LANGUAGE,
    language: languageInput,
  };
};
