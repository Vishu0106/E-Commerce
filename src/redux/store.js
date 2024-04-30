import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/ProductsSlice.js"
import authReducer from "./slices/authSlice.js"

export const store = configureStore({
    reducer: {
        auth : authReducer,
        products: productsReducer 
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools:true
});