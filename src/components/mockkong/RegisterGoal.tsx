import React, { useState } from 'react';
import * as api from '../../app/api';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

type TGoal = {
  _id: string;
  userId: string;
  goalName: string;
  goalTags: string[];
  period: number;
  plan: string;
  startedAt: string | Date;
}

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
    }
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}>
            Create Goal
          </Button>
        </>
      }
    </Box>
  )
}

export default RegisterGoal