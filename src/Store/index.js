import { combineReducers, createStore } from "redux";

import CategoryReducer from "./Reducer/CategoryReducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
});

export default createStore(RootReducer);
