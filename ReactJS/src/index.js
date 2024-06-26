import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import "./assets/styles/color.scss";
import "./assets/styles/import.scss";
import "./assets/styles/variable.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import IntlProverWrapper from "./hoc/IntlProverWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <IntlProverWrapper>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </IntlProverWrapper>
  </Provider>
);
