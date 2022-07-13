import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { RecoilRoot } from "recoil";
//
import store, { persistor } from "./redux";
import App from "./App";

//
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
