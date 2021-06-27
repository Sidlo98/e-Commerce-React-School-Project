import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
  productsReducer,
  productReducer,
  cartReducer,
  userReducer,
  adminReducer,
});
