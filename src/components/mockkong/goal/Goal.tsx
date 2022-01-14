import { TGoal } from 'global-types';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { MockkongStyled } from '../MockkongStyled';
import Plans from './Plans';

const Goal = ({ goal, showPlan, handleDelete }) => {
  const { _id, userId, goalName, goalTags, period, plan, planDone, startedAt }: TGoal = goal;

  return (
    <MockkongStyled.Goal className="Goal">
      {handleDelete &&
        <IconButton className='deleteGoalIcon' aria-label="delete" size="small">
          <DeleteForeverIcon onClick={() => handleDelete(_id)} />
        </IconButton>
      }
      <span style={{ float: 'right', fontSize: '14px', padding: '10px' }}>시작일: {startedAt?.toString().substring(0, 10)}</span>

      <Typography component="h6" variant="h6" sx={{ mb: 1 }}>{goalName}</Typography>
      
      {showPlan && <Plans goal={goal} />}

      <MockkongStyled.Tags className="Tags">
        { goal.goalTags && goal.goalTags.map((tag: string) => 
          <IconButton className='deleteGoalIcon' size="small">
            #{tag} 
          </IconButton>
        )}
      </MockkongStyled.Tags>

      
    </MockkongStyled.Goal>
  )
}

export default Goal;