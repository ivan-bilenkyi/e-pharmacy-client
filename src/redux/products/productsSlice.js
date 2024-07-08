import { createSlice } from '@reduxjs/toolkit';
import {getProducts} from "./operations.js";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
});

export const productsReducer = productsSlice.reducer;