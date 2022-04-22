import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//
const initialState = {
    fetched: false,
    count: 0,
};

//
export const fetchingCount = createAsyncThunk<number>('count', async () => {
    const res = await axios.get(
        'https://react-django-heroku.herokuapp.com/api/city/city-no-token-l/'
    );
    return res.data.length;
});

//
export const countSlice = createSlice({
    name: 'count',
    initialState: initialState,
    reducers: {
        countUp: (state) => {
            state.count += 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchingCount.fulfilled, (state, action) => {
            state.fetched = true;
            state.count = action.payload;
        });
    },
});

export const { countUp } = countSlice.actions;
export default countSlice.reducer;
