import { createStore } from "redux";
import CartReducer from "./Reducer/Cart.reducer";

const store = createStore(CartReducer);

export default store;
