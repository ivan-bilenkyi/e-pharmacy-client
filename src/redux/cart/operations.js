import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getCategories = createAsyncThunk(
    'categories',
    async (data, thunkAPI) => {
        try {
            const respons = await axios.get(`api/products/categories`);
            return respons.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const updateCart = createAsyncThunk(
    'updateToCart',
    async (data, thunkAPI) => {
        try {
            const respons = await axios.put(`/cart/update`, data);
            return respons.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const removeCartById = createAsyncThunk(
    'removeCart',
    async (id, thunkAPI) => {
        try {
            const respons = await axios.delete(`/cart/delete/${id}`);

            return respons.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

