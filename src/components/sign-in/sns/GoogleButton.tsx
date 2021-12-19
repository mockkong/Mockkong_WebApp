import React from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';

const _getUrl = (api: string) => {
  return process.env.NEXT_PUBLIC_SERVER_URL + api;
}

const clientId = process.env.NEXT_PUBLIC_GG_CLIENTID;

const GoogleButton = ({ onSocial }) => {
  const onSuccess = async (response) => {
    // console.log(response);
    const { googleId, profileObj: { email, name } } = response;

    // 1. 사용자 데이터 모두 서버에 보내기
    axios.post(_getUrl('/signin'), {
      data: response,
    })
      .then(function (response) {
        console.log(response);

        // 2. 사용자 정보 조회 결과 가져오기

        // 3. 사용자 정보가 유효하면 로그인

      })
      .catch(function (error) {
        // 4. 사용자 정보가 유효하지 않으면 로그아웃
        console.log(error);
      });

    await onSocial({
      socialId: googleId,
      socialType: 'google',
      email,
      nickname: name
    });
  }

  const onFailure = (error) => {
    console.log(error);
  }

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
