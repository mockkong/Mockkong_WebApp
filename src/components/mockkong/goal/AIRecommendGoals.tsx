import React from 'react';
import Typography from '@mui/material/Typography';
import { MockkongStyled } from '../MockkongStyled';

const Card = ({ data, registerGoal }) => {
  return (
    <div className="card" >
      <div className="img-box">
        <img src={data?.img} alt={data?.title} title={data?.title}/>
      </div>          
      <div className="details">
        <h2>{data?.plan}</h2>
        <p>{data?.goalName}</p>
      </div>

      <button type="button" onClick={() => registerGoal(data)}>
        Add~
      </button>
    </div>
  )
}

function AIRecommendGoals({ data, registerGoal }) {
  return (
    <MockkongStyled.AIRecommendGoals className="AIRecommendGoals">
      <Typography component="h5" variant="h5" sx={{ mb: 1, color: 'var(--colors-primary)' }}>
        AI Recommend Goals
      </Typography>

      <div className="Goal_Card">
        {data && 
          data.map((card) => (
            <Card data={card} registerGoal={registerGoal}/>
          ))
        }
      </div>
    </MockkongStyled.AIRecommendGoals>
    
  )
}

export default AIRecommendGoals