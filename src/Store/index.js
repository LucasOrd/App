import { applyMiddleware, combineReducers, createStore } from "redux";

import CategoryReducer from "./Reducer/CategoryReducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  categories: CategoryReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
