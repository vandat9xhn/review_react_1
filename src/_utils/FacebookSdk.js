import { LoadScript } from './load_script';

//
export const promisesFB = {
    init: () => {
        return new Promise((resolve, reject) => {
            if (typeof FB !== 'undefined') {
                resolve();
            } else {
                window.fbAsyncInit = () => {
                    FB.init({
                        appId: '234967228001181',
                        cookie: true,
                        xfbml: true,
                        version: 'v2.5',
                    });
                    resolve();
                };
                LoadScript(
                    document,
                    'script',
                    'facebook-jssdk',
                    '//connect.facebook.net/en_US/sdk.js'
                );
            }
        });
    },
    checkLoginState: () => {
        return new Promise((resolve) => {
            FB.getLoginStatus((response) => {
                resolve(response);
            });
        });
    },

    login: () => {
        return new Promise((resolve, reject) => {
            FB.login((response) => {
                response.status === 'connected'
                    ? resolve(response)
                    : reject(response);
            });
        });
    },

    logout: () => {
        return new Promise((resolve, reject) => {
            FB.logout((response) => {
                response.authResponse ? resolve(response) : reject(response);
            });
        });
    },

    fetch: () => {
        return new Promise((resolve, reject) => {
            FB.api(
                '/me',
                { fields: 'first_name, last_name, gender, picture' },
                (response) =>
                    response.error ? reject(response) : resolve(response)
            );
        });
    },
};

//
export async function checkStatusFb() {
    try {
        await promisesFB.init();
        const res = await promisesFB.checkLoginState();

        return res.status;
    } catch (err) {
        throw err;
    }
}

//
export async function doLoginFb() {
    try {
        await promisesFB.init();
        await promisesFB.login();
        const res = await promisesFB.fetch();

        return res;
    } catch (err) {
        throw err;
    }
}

//
export async function doLogoutFb() {
    try {
        await promisesFB.init();
        const res = await promisesFB.logout();

        return res;
    } catch (err) {
        throw err;
    }
}
