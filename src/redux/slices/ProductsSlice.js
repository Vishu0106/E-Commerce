import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance.js"

const initialState = {
    productList:[]
}

export const getProducts = createAsyncThunk('/products',async(data)=> {
    try {
        const response =  axiosInstance.get(`/products?limit=${20}`);
        toast.promise(response, {
            loading: 'fetching Products',
            success: 'Products fetched successfully',
            error: 'Failed to fetch Products'
        })
        return (await response)?.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const categorieProducts = createAsyncThunk('/products/categorie',async(data)=> {
    try {
        console.log(`/products/category/${data}`)
        const response =  axiosInstance.get(`/products/category/${data}`);
        toast.promise(response, {
            loading: 'fetching categori Products',
            success: 'Products fetched successfully',
            error: 'Failed to fetch Products'
        })
        return (await response)?.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
           if(action?.payload) {
            state.productList = action?.payload;
           }
        })
        .addCase(categorieProducts.fulfilled, (state, action) => {
            if(action?.payload) {
                state.productList = action?.payload;
            }
        })
    }
    
})

export default productsSlice.reducer;