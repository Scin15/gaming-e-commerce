import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import cartReducer from "./cart/cartSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
    reducer : {
        counter: counterReducer,
        cart: cartReducer,
        user: userReducer,
    },
});