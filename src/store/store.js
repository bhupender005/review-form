import { createStore } from "redux";
import { formReducer } from "../reducers/formReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(formReducer, composeWithDevTools());

export default store;