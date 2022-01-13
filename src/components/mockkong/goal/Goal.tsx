import { TGoal } from 'global-types';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { MockkongStyled } from '../MockkongStyled';
import * as api from 'app/api';
import Plans from './Plans';

const Goal = ({ goal, showPlan, readonly }) => {
  const { _id, userId, goalName, goalTags, period, plan, planDone, startedAt }: TGoal = goal;

  const handleGoalClick = () => {
    console.log('handleGoalClick id:' + _id);
  }

  const handleDelete = async () => {
    console.log('handleDelete id:' + _id);
    const result = await api.deleteGoal(_id);
    console.log('handleDelete result:', result);
  }

  return (
    <MockkongStyled.Goal className="Goal" onClick={handleGoalClick}>
      {!readonly &&
        <IconButton className='deleteGoalIcon' aria-label="delete" size="small">
          <DeleteForeverIcon onClick={handleDelete} />
        </IconButton>
      }
      <Typography component="h6" variant="h6" sx={{ mb: 1 }}>{goalName}</Typography>
      
      {showPlan && <Plans goalId={_id} planDone={planDone} />}

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