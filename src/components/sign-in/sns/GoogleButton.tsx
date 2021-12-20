import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = process.env.NEXT_PUBLIC_GG_CLIENTID;

const GoogleButton = ({ onSuccess, onFailure }) => {
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure} />
    </div>
  )
}
export default GoogleButton;
