import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
//
import App from './App';
import store from './redux';

//
ReactDOM.render(
    <Provider store={store}>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
