import { createStore, combineReducers, applyMiddleware } from "redux";
import {reducerImage} from "../reducers/reducerImage";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  loadData: reducerImage
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));