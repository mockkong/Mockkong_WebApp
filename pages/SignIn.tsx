import React from 'react'
import 'tailwindcss/tailwind.css'
import GoogleButton from '../components/sns-login/GoogleButton';

function SignIn() {
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