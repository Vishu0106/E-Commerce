import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) :[] ,
    size: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : 0
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            action.payload = {...action.payload, quantity: 1};
            state.cart = [...state.cart, action.payload];
            state.size = state.cart.length;
            localStorage.setItem("cart",JSON.stringify(state.cart));
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            state.size = state.cart.length;
            localStorage.setItem("cart",JSON.stringify(state.cart));
        },
        addQuantity: (state, action) => {
            const index = state.cart.findIndex((item) => item.id === action.payload.id);
            state.cart[index].quantity += 1;
            localStorage.setItem("cart",JSON.stringify(state.cart));
        },
        subtractQuantity: (state, action) => {
            const index = state.cart.findIndex((item) => item.id === action.payload.id);
            if(state.cart[index].quantity > 1) {
                state.cart[index].quantity -= 1;
            }
            localStorage.setItem("cart",JSON.stringify(state.cart));
        },
        deleteCart: (state) => {
            state.cart = [];
            state.size = 0;
            localStorage.removeItem("cart");
        }
    }
})

export const {addToCart, removeFromCart , addQuantity , subtractQuantity , deleteCart} = cartSlice.actions;
export default cartSlice.reducer;