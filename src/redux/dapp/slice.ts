import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//
const initialState = {
   
};

//
export const getWeb3 = createAsyncThunk('dapp', async () => {
    const res = await axios.get(
        ''
    );
    return res.data.length;
});

//
export const dappSlice = createSlice({
    name: 'dapp',
    initialState: initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        
    },
});

export const {  } = dappSlice.actions;
export default dappSlice.reducer;
