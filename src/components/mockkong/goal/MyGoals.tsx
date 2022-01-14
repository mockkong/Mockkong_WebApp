import React from 'react';
import Typography from '@mui/material/Typography';
import { MockkongStyled } from '../MockkongStyled';
import Goal from './Goal';

function MyGoals({ data, handleGoalDelete }) {
  return (
    <MockkongStyled.MyGoals className="MyGoals">
      <Typography component="h5" variant="h5" sx={{ mb: 1, color: 'var(--colors-primary)' }}>My Goals</Typography>
      <div className="Goals">
        {data && data.map((goal, i)=>
          <Goal 
            key={`Goal_${goal._id}_${i}`} 
            goal={goal} 
            showPlan={true}
            handleDelete={handleGoalDelete}
          />
        )}
        {data && data.length===0 && <div>아직 등록한 Goal이 없네요! Create Goal로 추가해보세요!</div> }
      </div>
    </MockkongStyled.MyGoals>
  )
}

export default MyGoals;