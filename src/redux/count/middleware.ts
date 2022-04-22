import { createListenerMiddleware } from '@reduxjs/toolkit';
import { countUp } from './slice';

//
export const customCountMiddleWare = createListenerMiddleware();
// customCountMiddleWare.startListening({
//     actionCreator: fetchingCount.fulfilled,
//     effect: async (action) => {
//         console.log(action);
//     },
// });
customCountMiddleWare.startListening({
    actionCreator: countUp,
    // matcher: isAnyOf(countUp, fetchingCount.fulfilled),
    // predicate: (action, curValue, preValue) => {
    //     console.log(action);

    //     return false
    // },
    effect: async (action, listenerApi) => {
        // listenerApi.dispatch(countUp);
    },
});
