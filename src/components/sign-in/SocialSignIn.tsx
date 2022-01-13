import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import GoogleButton from './sns/GoogleButton';

const _getUrl = (api: string) => {
  return process.env.NEXT_PUBLIC_SERVER_URL + api;
}

function SocialSignIn({ ...props }) {

  const onSignInSuccess = (response: any) => {
    console.log('signin success! response: ', response);
    
    const { googleId, tokenId, profileObj: { email, name } } = response;
    const data = {
      tokenId: tokenId,
      socialId: googleId,
      socialType: 'google',
      email,
      nickname: name,
    };

    // for test info
    const formData = new FormData();
    formData.append('username', 'frontend');
    formData.append('password', 'password');

    // get token
    axios.post(_getUrl('/token'), formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }).then(function (response: any) {
      if (response?.status == '200') {
        const accessToken = response.data.access_token;

        localStorage.setItem("mockkong_data$$access_token", accessToken);

        axios.post(_getUrl('/user'), { idToken: tokenId }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          },
        }).then(function (response: any) {
          if (response?.status == '200') {
            localStorage.setItem("mockkong_data$$user_data", JSON.stringify({
              isLogin: true,
              ...response.data
            }));
            Router.push('/dashboard');
          }
        }).catch(function (error) {
          console.log('catch', error);
        });
      }
    }).catch(function (error) {
      console.log('catch', error);
    });
  }

  const onSignInFailure = (err: any) => {
    localStorage.setItem("mockkong_data$$user_data", JSON.stringify({ isLogin: false }));
    alert("" + err?.details);
    console.error(err);
  }

  return (
    <div>
      <GoogleButton onSuccess={onSignInSuccess} onFailure={onSignInFailure} />
    </div>
  )
}

export default SocialSignIn;