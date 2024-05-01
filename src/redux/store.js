import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/ProductsSlice.js"
import authReducer from "./slices/authSlice.js"
import cartReducer from "./slices/cartSlice.js"

export const store = configureStore({
    reducer: {
        auth : authReducer,
        products: productsReducer,
        cart: cartReducer 
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools:true
});