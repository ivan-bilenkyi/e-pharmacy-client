import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from "./operations.js";

const cartSlice = createSlice({
    name: 'carts',
    initialState: {
        carts: 0,
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.carts = action.payload.length;
            })
            .addCase(updateCart.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
});

export const cartsReducer = cartSlice.reducer;