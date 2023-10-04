//In an application we are gonna have multiple reducers So basically we will combine all of them in this index.js File

// import { ActionTypes } from "../constants/action-types";
import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;