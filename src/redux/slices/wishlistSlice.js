import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [],
    size: localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")).length : 0
}


const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlist = [...state.wishlist, action.payload];
            state.size = state.wishlist.length;
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter((item) => item.id !== action.payload.id);
            state.size = state.wishlist.length;
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        }
    }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;