
import { TPlans, TGoal, TPlan } from 'global-types';
import { MockkongStyled } from '../MockkongStyled';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';


const planBoxStyle = {
  display: 'inline-flex',
  flexDirection: 'column',
  verticalAlign: 'top'
}

const getPlanText = (plan: TPlan) => {
  console.log(plan)
  if (plan === 0) {
    return <span>Done</span>
  } else {
    return <span>Ok</span>
  }
}

const Plans = ({ goal }: TPlans) => {
  const { _id, planDone, plan, startedAt }: TGoal = goal;

  const handlePlanClick = (plan: TPlan) => {
    console.log(plan)
  }

  return (
    <MockkongStyled.Plans>
      <Box sx={planBoxStyle}>
        <IconButton size="small" className='start'>
          <span>Start</span>
        </IconButton>
      </Box>

      {planDone && planDone.length > 0 &&
        planDone.map((plan: 0 | 1, i) => (
          <Box sx={planBoxStyle}>
            <IconButton
              key={`Goal_${_id}_Plan_${i}`}
              size="small" className={`${plan === 0 ? '' : 'done'}`}
              onClick={() => handlePlanClick(plan)}
            >
              Done
            </IconButton>
            <Box className='Plan' sx={{ textAlign: 'center' }}>
              {plan}
            </Box>
          </Box>
        ))
      }
    </MockkongStyled.Plans>
  )
}

export default Plans;