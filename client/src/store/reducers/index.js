import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import productReducer from "./productReducer"

export default combineReducers({
  productsReducer,
  productReducer
});
