import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/ProductsSlice.js"
import authReducer from "./slices/authSlice.js"
import cartReducer from "./slices/cartSlice.js"
import wishlistReducer from "./slices/wishlistSlice.js"


export const store = configureStore({
    reducer: {
        auth : authReducer,
        products: productsReducer,
        cart: cartReducer ,
        wishlist: wishlistReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools:true
});