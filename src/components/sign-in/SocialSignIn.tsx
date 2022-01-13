import React from 'react';
import axios from 'axios';
import Router from 'next/router';
import * as api from 'app/api';
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
        }).then(async function (response: any) {
          if (response?.status == '200') {
            console.log(response.data)
            const { _id }: any = response.data;
            const { name, email} = await api.getUserDetail(_id);
            const userData = {
              isLogin: true,
              userId: _id,
              name, 
              email
            }
            console.log('userData', userData)

            localStorage.setItem("mockkong_data$$user_data", JSON.stringify(userData));
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