require("react-hot-loader/patch");
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import i18n from "./locales/i18n";

import App from "./App";
import {store} from "./store/store";

import "./sass/main.scss";

ReactDOM.render(
    <Provider store={store}>
      {/* <I18nextProvider i18n={i18n}> */}
        <React.StrictMode>
            <App /> 
        </React.StrictMode>
      {/* </I18nextProvider> */}
    </Provider>,
  document.getElementById("root")
);