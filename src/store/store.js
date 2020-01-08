import { createStore, applyMiddleware } from "redux";
import { formReducer } from "../reducers/formReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(formReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;