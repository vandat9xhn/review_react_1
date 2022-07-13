import { createSlice } from "@reduxjs/toolkit";

//
const initialState = {
    city: "",
};

//
const myPersistSlice = createSlice({
    name: "myPersistSlice",
    initialState: initialState,
    reducers: {
        changeCity: (state, action) => {
            state.city = action.payload;
        },
    },
});

const myPersistReducer = myPersistSlice.reducer;
//
export const { changeCity } = myPersistSlice.actions;
export default myPersistReducer;
