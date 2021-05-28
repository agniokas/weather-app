import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import reducers from "./reducers";

const rootReducer = combineReducers({
weather: reducers, form: FormReducer
})

export default rootReducer;