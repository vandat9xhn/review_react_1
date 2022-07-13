//
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { setupListeners } from "@reduxjs/toolkit/query";
//
import { customCountMiddleWare } from "./count/middleware";

import { countSlice } from "./count/slice";
import myPersistReducer from "./my_persist/slice";
// import { myQueryApi } from "./my_query/query_api";

//
const rootReducer = combineReducers({
    count_obj: countSlice.reducer,
    my_persist: myPersistReducer,
    // query_api: myQueryApi.reducer,
});

//
const persist_config = {
    key: "root",
    storage: storage,
    // stateReconciler: autoMergeLevel2,
    whitelist: ["my_persist"],
};
const persist_reducer = persistReducer(persist_config, rootReducer);

//
const store = configureStore({
    reducer: persist_reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        })
            .prepend(customCountMiddleWare.middleware),
});

//
export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;

//
export const persistor = persistStore(store);
export default store;

setupListeners(store.dispatch);
