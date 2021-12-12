import React from 'react';
import GoogleButton from './GoogleButton';

function SignIn({...props}: any) {
  const onSocial = (data: any) => {
    console.log('login', data);
  }

  return (
    <>
      <GoogleButton onSocial={onSocial} />
    </>
  )
}

export default SignIn