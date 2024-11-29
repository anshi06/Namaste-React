import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"

const appStore = configureStore({
    reducer: { //App reducer (combination of all reducers)
        cart: cartReducer
    }
}); //Create store for react application.

export default appStore;