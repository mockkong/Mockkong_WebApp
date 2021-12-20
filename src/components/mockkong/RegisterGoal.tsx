import React from 'react';
import axios from 'axios';
import Router from 'next/router';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const _getUrl = (api: string) => {
  return process.env.NEXT_PUBLIC_SERVER_URL + api;
}

function RegisterGoal({ ...props }: any) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // for test info
    const formData = new FormData(event.currentTarget);
    const userData = JSON.parse(localStorage.getItem('mockkong_data$$user_data'));
    const accessToken = localStorage.getItem('mockkong_data$$access_token');

    const data = {
      "userId": userData?._id, // TODO get by localhost
      "goalName": formData.get('goalName'),
      "goalTags": [formData.get('goalTags').toString().split(",")],
      "plan": formData.get('plan'),
      "period": formData.get('period'),
      "startedAt": "2021-12-20T12:18:52.787Z"
    }

    console.log(data);
    console.log(accessToken);

    // get token
    axios.post(_getUrl('/goal'), data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      },
    }).then(function (response: any) {
      console.log('goal then', response);
      if (response?.status == '200') {
      }
    }).catch(function (error) {
      console.log('catch', error);
    });
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{
      mt: 1,
      width: '300px',
      p: 3,
      position: 'absolute',
      left: '50%',
      top: '20%',
      bgcolor: 'white',
      border: '1px solid gray'
    }}>
      <Typography component="h5" variant="h5">
        Create Goal
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="goalName"
        label="goalName"
        type="text"
        name="goalName"
        autoComplete="goalName"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="goalTags"
        label="goalTags"
        type="text"
        name="goalTags"
        autoComplete="goalTags"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="plan"
        label="plan"
        type="text"
        name="plan"
        autoComplete="plan"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="period"
        label="period"
        type="number"
        name="period"
        autoComplete="period"
        autoFocus
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3 }}
      >
        Create Goal
      </Button>
    </Box>
  )
}

export default RegisterGoal