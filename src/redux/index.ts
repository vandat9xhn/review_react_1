//
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
//
import { countSlice } from './count/slice';
import { customCountMiddleWare } from './count/middleware';

//
const rootReducer = combineReducers({
    count_obj: countSlice.reducer,
});

//
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(customCountMiddleWare.middleware),
});

//
export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;

//
export default store;
