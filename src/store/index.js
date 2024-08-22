import { createStore, combineReducers } from "https://cdn.skypack.dev/redux";
import cartReducer from "./cartSlice.js";
import productsReducer from "./productsSlice.js";
import wishListReducer from "./wishListSlice.js";

const reducer = combineReducers({
    products : productsReducer,
    cartItems: cartReducer,
    wishList : wishListReducer
})

const store = createStore(reducer);

export default store 