import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./rootReducer";

const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
});

const persistConfig = {
    bleckList: ["form"],
    key: "reactreduxform",
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk);
const store = createStore(persistedReducer, composeEnhancers(middleware));
const persistor = persistStore(store);
export {store, persistor};