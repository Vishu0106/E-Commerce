import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/ProductsSlice.js"

export const store = configureStore({
    reducer: {
        products: productsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools:true
});