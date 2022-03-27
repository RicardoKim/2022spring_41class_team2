import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = '923198322735-8m8aomqof0no00kcp1u145hr9ung1gbq.apps.googleusercontent.com';

export default function GoogleLoginBtn({ onGoogleLogin }){
    const onSuccess = async(response) => {
        const { googleId, profileObj : { email, name } } = response;
        
        await onGoogleLogin (
          console.log(googleId)
        );
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}