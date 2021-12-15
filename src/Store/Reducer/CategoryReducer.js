import { CATEGORIES } from "../../Data/Data";

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const CategoryReducer = (state = initialState, action) => {
  return state;
};

export default CategoryReducer;
