import { applyMiddleware, combineReducers, createStore } from "redux";

import CategoryReducer from "./Reducer/CategoryReducer";
import thunk from "redux-thunk";

import CategoryReducer from "./Reducer/AuthReducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
