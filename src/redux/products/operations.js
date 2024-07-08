import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    'products',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/products');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);