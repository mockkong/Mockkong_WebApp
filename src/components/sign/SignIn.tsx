import React from 'react'
import 'tailwindcss/tailwind.css'
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