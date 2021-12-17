import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReducer from "./Reducer/AuthReducer";
import CategoryReducer from "./Reducer/CategoryReducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
