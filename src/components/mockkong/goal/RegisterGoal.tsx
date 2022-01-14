import React, { useState } from 'react';
import * as api from 'app/api';
import { TGoal } from 'global-types';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { MockkongStyled } from '../MockkongStyled';
import Goal from './Goal';

const toggleSelectedStyle = {
  color: 'white !important', 
  bgcolor: '#25c39c !important'
}

function RegisterGoal({ closeModal }: any) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [goal, setGoal] = useState<TGoal>(null);
  const [msg, setMsg] = useState<string>('');
  const [period, setPeriod] = useState<string>('1');
  const [startedAt, setStartedAt] = useState<string>('today');

  const handlePeriod = (event, newPeriod) => {
    if (newPeriod) setPeriod(newPeriod);
  };
  const handleStartedAt = (event, newStartedAt) => {
    if (newStartedAt) setStartedAt(newStartedAt);
  };
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const goalName: string = formData.get('goalName').toString().trim();
    const goalTags: string = formData.get('goalTags').toString().trim();
    const plan: string = formData.get('plan').toString().trim();
    const planDone: number[] = new Array(Number(formData.get('planDone'))).fill(0);
    let today = new Date()

    const data: TGoal = {
      "userId": "",
      "goalName": goalName,
      "goalTags": goalTags === '' ? goalTags.split(",") : [],
      "plan": plan,
      "period": Number(period),
      "planDone": planDone,
      "startedAt": startedAt==='today' ? today : new Date(today.setDate(today.getDate() + 1))
    }

    const isValid: boolean = await validation(data);
    
    if (isValid===true) {
      const { _id } = await api.registerGoal(data);
      if(_id) {
        const result = await api.getGoal(_id);
        setGoal(result);
        setIsSuccess(true);
      }
    }
  };

  const validation = async (data: TGoal) => {
    if (data.goalName === '') {
      setMsg('*목표명을 입력해주세요.');
      return false;
    }
    if (data.plan === '') {
      setMsg('*계획을 입력해주세요.');
      return false;
    }
    if (data.planDone.length===0) {
      setMsg('*반복 횟수를 입력해주세요.');
      return false;
    }
    return true;
  }

  return (
    <MockkongStyled.RegisterGoal>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{
        position: 'absolute',
        top: '15%',
        left: 'calc(50% - 180px)',
        width: '360px',
        p: '30px',
        textAlign: 'left',
        bgcolor: 'white',
        border: '1px solid gray'
      }}>
        <Box sx={{ position: 'absolute', right: 5, top: 5 }}>
          <IconButton size="large" onClick={closeModal}>
            <CloseIcon/>
          </IconButton>
        </Box>
        {isSuccess 
          ?
          <div>
            <Typography component="h5" variant="h5" sx={{ mt: 2, color: 'var(--colors-primary)', textAlign: 'center' }}>Register Success!</Typography>            
            <Box sx={{ width: '100%', mt: 2, p: 2, bgcolor: '#a7ddef', borderRadius: 3 }}>
              <Goal 
                goal={goal} 
                showPlan={true}
              />
            </Box>

            <Box sx={{ width: '100%', mt: 2, p: 2, bgcolor: '#d8f5ff', borderRadius: 3 }}>
              <div>반복 계획: {goal?.plan}</div>
              <div>반복 주기: {goal?.period}일</div>
              <div>반복 횟수: {goal?.planDone?.length}번</div>
            </Box>

            <div style={{textAlign: 'center', width: '100%' }} >
              <button type="button" className="bubbly-button" style={{ width: '100%' }} onClick={closeModal}>
                OK
              </button>
            </div>
          </div>
          :
          <>
            <Typography component="h5" variant="h5" sx={{ mt: 2, color: 'var(--colors-primary)', textAlign: 'center' }}>Register Goal</Typography>

            <Typography component="p" variant="subtitle1" sx={{ mt: 2, color: 'gray' }}>
              *목표명
            </Typography>
            <TextField
              variant="filled"
              required
              fullWidth
              type="text"
              id="goalName"
              name="goalName"
              label=""
              autoComplete="goalName"
              size="small"
              autoFocus
            />

            <Typography component="p" variant="subtitle1" sx={{ mt: 2, color: 'gray' }}>
              목표 태그(콤마로 구분)
            </Typography>
            <TextField
              variant="filled"
              fullWidth
              type="text"
              id="goalTags"
              name="goalTags"
              label=""
              autoComplete="goalTags"
              size="small"
            />

            <Typography component="p" variant="subtitle1" sx={{ mt: 2, color: 'gray' }}>
              *반복 계획
            </Typography>
            <TextField
              variant="filled"
              required
              fullWidth
              type="text"
              id="plan"
              name="plan"
              label=""
              autoComplete="plan"
              size="small"
            />

            <Typography component="p" variant="subtitle1" sx={{ mt: 2, color: 'gray' }}>
              *반복 주기
            </Typography>
            <ToggleButtonGroup
              id="period"
              value={period}
              exclusive
              fullWidth
              onChange={handlePeriod}
              sx={{  }}
            >
              <ToggleButton value="1" aria-label="left aligned" sx={ period==='1' ? toggleSelectedStyle : {} }>
                1일
              </ToggleButton>
              <ToggleButton value="2" aria-label="centered" sx={ period==='2' ? toggleSelectedStyle : {} }>
                2일
              </ToggleButton>
              <ToggleButton value="3" aria-label="centered" sx={ period==='3' ? toggleSelectedStyle : {} }>
                3일
              </ToggleButton>
              <ToggleButton value="7" aria-label="centered" sx={ period==='7' ? toggleSelectedStyle : {} }>
                일주일
              </ToggleButton>
            </ToggleButtonGroup>

            <Typography component="p" variant="subtitle1" sx={{ mt: 2, color: 'gray' }}>
              *시작일
            </Typography>
            <ToggleButtonGroup
              id="startedAt"
              value={startedAt}
              exclusive
              fullWidth
              onChange={handleStartedAt}
              sx={{ }}
            >
              <ToggleButton value="today" aria-label="left aligned" sx={ startedAt==='today' ? toggleSelectedStyle : {} }>
                오늘부터
              </ToggleButton>
              <ToggleButton value="tomorrow" aria-label="centered" sx={ startedAt==='tomorrow' ? toggleSelectedStyle : {} }>
                내일부터
              </ToggleButton>
            </ToggleButtonGroup>

            <Typography component="p" variant="subtitle1" sx={{ mt: 2, color: 'gray' }}>
              *반복 횟수
            </Typography>
            <TextField
              variant="filled"
              required
              fullWidth
              type="number"
              id="planDone"
              name="planDone"
              label=""
              autoComplete="planDone"
              size="small"
            />

            <div style={{textAlign: 'center', width: '100%' }}>
              <button type="submit" className="bubbly-button" style={{ width: '100%' }}>
                Create Goal
              </button>
            </div>

            <div>
              {msg}
            </div>
          </>
        }
      </Box>
    </MockkongStyled.RegisterGoal>
  )
}

export default RegisterGoal