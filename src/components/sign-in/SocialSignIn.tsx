import React, { useState } from 'react';
import Router from 'next/router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import GoogleButton from './sns/GoogleButton';

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

  const onSocial = (data: any) => {
    console.log('login', data);
    if(data?.error) {
      localStorage.setItem("mockkong_data$$user_data", JSON.stringify({ isLogin: false }));
      alert("" + data?.details);
    } else {
      // TODO isLogin to 토큰인증방식
      localStorage.setItem("mockkong_data$$user_data", JSON.stringify({ isLogin: true, ...data }));
      Router.push('/dashboard');
    }
  }

  return (
    <div>
      <Button type="submit"
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
          <GoogleButton onSocial={onSocial} />
        </Box>
      </Modal>
    </div>
  )
}

export default SocialSignIn;