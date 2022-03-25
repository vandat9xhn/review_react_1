import * as React from 'react';
//
import {
    GoogleLogin,
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from 'react-google-login';

//
const ButtonLogin = (props: { onClick: () => void; disabled?: boolean }) => {
    return (
        <button onClick={props.onClick} disabled={props.disabled}>
            This is my custom Google button
        </button>
    );
};

//
export interface MyGoogleLoginProps {}

//
function MyGoogleLogin({}: MyGoogleLoginProps) {
    //
    function responseGoogle(
        res: GoogleLoginResponse | GoogleLoginResponseOffline
    ) {
        console.log(res);
    }

    //
    return (
        <div>
            <GoogleLogin
                clientId="566065787169-9u3ii1mq3ccq5os2qi1o7iqe1hlpvegu.apps.googleusercontent.com"
                buttonText="Login"
                render={ButtonLogin}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                isSignedIn={true}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}

export default MyGoogleLogin;
