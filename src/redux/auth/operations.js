import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3333/api";


const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
    "auth/register",
    async (newUser, thunkAPI) => {
        try {
            const res = await axios.post("/user/register", newUser);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    "auth/login",
    async (userInfo, thunkAPI) => {
        try {
            const res = await axios.post("/users/login", userInfo);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await axios.post("/users/logout");
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const reduxState = thunkAPI.getState();
        setAuthHeader(reduxState.auth.token);

        const res = await axios.get("/users/me");
        return res.data;
    },
    {
        condition(_, thunkAPI) {
            const reduxState = thunkAPI.getState();
            return reduxState.auth.token !== null;
        },
    }
);