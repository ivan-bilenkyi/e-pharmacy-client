import { createSlice } from "@reduxjs/toolkit";
import {logIn, logOut, placeOrder, refreshUser, register, updateCart} from "./operations";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        carts: 0,
        token: null,
        error: null,
        isLoggedIn: false,
        isLoading: false,
        isRefreshing: false,
    },
    extraReducers: builder =>
        builder
            .addCase(register.pending, state => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoading = false;
                state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, state => {
                state.user = {
                    name: null,
                    email: null,
                };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.carts = action.payload.cart.length
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.user = {
                    name: null,
                    email: null,
                };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.carts = action.payload.length
            })
            .addCase(updateCart.rejected, (state, action) => {
                state.error = action.payload
            })
            .addCase(placeOrder.fulfilled, (state, action) => {
                state.carts = 0;
            })
            .addCase(placeOrder.rejected, (state, action) => {
                state.error = action.payload
            })

});

export default authSlice.reducer;