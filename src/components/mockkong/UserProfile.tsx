import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as Mockkong from 'components/mockkong';

const style = {
  // position: 'sticky',
  textAlign: 'center',
  top: '100px',
  width: 230,
  margin: '10px',
  padding: '30px 10px',
  bgcolor: 'background.paper',
  border: '1px solid lightgray',
};

function UserProfile({ ...props }: any) {
  const [registerGoalOpen, setRegisterGoalOpen] = useState(false);

  const openRegisterGoal = () => {
    setRegisterGoalOpen(true)
  }
  const closeRegisterGoal = () => {
    setRegisterGoalOpen(false);
    // getMyGoals();
  }

  return (
    <Box sx={style}>
      <AccountCircleIcon sx={{ fontSize: 90, mb: 2, color: 'gray' }} />
      
      <Typography component="h5" variant="h5" sx={{ mb: 3 }}>
        용감한 개발자
      </Typography>
      
      <Typography component="p" variant="subtitle1" sx={{ mb: 3 }}>
        aaa@mockkong.com
      </Typography>

      <Typography component="span" variant="subtitle2" sx={{ mb: 3 }}>
        #개발자 #독서 #운동
      </Typography>

      <Button
        type="button"
        fullWidth
        variant="contained"
        onClick={openRegisterGoal}
        sx={{ mt: 3 }}>
        Create Goal
      </Button>
      {registerGoalOpen && <Mockkong.RegisterGoal closeModal={closeRegisterGoal}/>}
    </Box>
  )
}

export default UserProfile