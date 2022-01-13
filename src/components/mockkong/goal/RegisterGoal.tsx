import React, { useState } from 'react';
import * as api from 'app/api';
import { TGoal } from 'global-types';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { MockkongStyled } from '../MockkongStyled';

function RegisterGoal({ closeModal }: any) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [goal, setGoal] = useState<TGoal>(null);
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { _id } = await api.registerGoal(formData);
    if(_id) {
      const result = await api.getGoal(_id);
      setGoal(result);
      setIsSuccess(true);
      console.log(goal)
    }
  };

  return (
    <MockkongStyled.RegisterGoal>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{
        mt: 1,
        width: '300px',
        p: 3,
        position: 'absolute',
        left: 'calc(50% - 150px)',
        top: '20%',
        bgcolor: 'white',
        textAlign: 'left',
        border: '1px solid gray'
      }}>
        <CloseIcon onClick={closeModal}/>
        {isSuccess 
          ?
          <div>
            <Typography component="h5" variant="h5" sx={{ mb: 3 }}>Register Success!</Typography>
            <div>
              goalName: {goal?.goalName}
            </div>
            <div>
              goalTags: {goal?.goalTags}
            </div>
            <div>
              plan: {goal?.plan}
            </div>
            <div>
              period: {goal?.period}
            </div>
            <div>
              repeat: {goal?.planDone?.length}
            </div>
            <div>
              startedAt: {goal?.startedAt}
            </div>
            <Button
              type="button"
              fullWidth
              variant="contained"
              onClick={closeModal}
              sx={{ mt: 3 }}>
              OK
            </Button>
          </div>
          :
          <>
            <Typography component="h5" variant="h5" sx={{ mb: 3 }}>Register Goal</Typography>
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="repeat"
              label="repeat"
              type="number"
              name="repeat"
              autoComplete="repeat"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3 }}>
              Create Goal
            </Button>

            <Button variant="outlined">Primary</Button>
          </>
        }
      </Box>
    </MockkongStyled.RegisterGoal>
  )
}

export default RegisterGoal