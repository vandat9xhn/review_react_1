import * as React from 'react';
//
import { checkStatusFb, doLoginFb } from '../../../_utils/FacebookSdk';

//
export interface FBLoginProps {}

//
function FBLogin({}: FBLoginProps) {
    //
    React.useEffect(() => {
        // detectLoginFb();
    }, []);

    // ----

    //
    async function detectLoginFb() {
        const login_status = await checkStatusFb();

        console.log(login_status);

        if (login_status !== 'connected') {
            const data = await doLoginFb();
            console.log(data);
        }
    }

    //
    function handleUserInfo(res) {
        console.log(res);
    }

    //
    function handleNotAuthorized() {
        console.log('not authorized');
    }

    //
    function handleNotLogin() {
        console.log('not login');
    }

    //
    return <div></div>;
}

export default FBLogin;
