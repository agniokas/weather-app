import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from "./reducers";

const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;