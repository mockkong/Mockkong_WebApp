
import { TGoal } from 'global-types';
import { MockkongStyled } from '../MockkongStyled';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const planBoxStyle = {
  display: 'inline-flex', 
  flexDirection: 'column', 
  verticalAlign: 'top'
}

const Plans = ({ goal }) => {
  const { _id, planDone, plan, startedAt }: TGoal = goal;
  return (
    <MockkongStyled.Plans>
      <Box sx={planBoxStyle}>
        <IconButton size="small" className='start'>
          <span>Start</span>
        </IconButton>
      </Box>

      { planDone && planDone.length > 0 &&
          planDone.map((done: 0 | 1, i) => (
            <Box sx={planBoxStyle}>
              <IconButton 
                key={`Goal_${_id}_Plan_${i}`}
                size="small" className={`${done===0 ? '' : 'done'}`}>
                { done === 0 && <span>DONE</span> }
                { done===1 && <span>OK</span> }
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