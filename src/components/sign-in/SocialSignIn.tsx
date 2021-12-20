import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import GoogleButton from './sns/GoogleButton';

const _getUrl = (api: string) => {
  return process.env.NEXT_PUBLIC_SERVER_URL + api;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function SocialSignIn({ ...props }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSignInSuccess = (response: any) => {
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
      // console.log('then', response);
      if (response?.status == '200') {
        const accessToken = response.data.access_token;

        localStorage.setItem("mockkong_data$$access_token", accessToken);

        // get token
        axios.post(_getUrl('/user'), { idToken: tokenId }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          },
        }).then(function (response: any) {
          // console.log('then', response);
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
      <Button type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 1 }}
        onClick={handleOpen}>SNS Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <GoogleButton onSuccess={onSignInSuccess} onFailure={onSignInFailure} />
        </Box>
      </Modal>
    </div>
  )
}

export default SocialSignIn;