import { composeWithDevTools } from "redux-devtools-extension";

import { legacy_createStore } from "redux";
import rootReducer from "./reducer/rootReducer";

const store = legacy_createStore(rootReducer, composeWithDevTools());

export default store;
