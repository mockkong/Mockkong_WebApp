
import { MockkongStyled } from '../MockkongStyled';
import IconButton from '@mui/material/IconButton';

const Plans = ({ goalId, planDone }: any) => {
  return (
    <MockkongStyled.Plans>
      <IconButton size="small" className='start'>
        <span>Start</span>
      </IconButton>

      { planDone && planDone.length > 0 &&
          planDone.map((done: 0 | 1, i) => (
            <IconButton 
              key={`Goal_${goalId}_Plan_${i}`}
              size="small" className={`${done===0 ? '' : 'done'}`}>
              {done === 0 && 
                <span>DONE</span>
              }
              {done===1 &&
                <span>OK</span>
              }
            </IconButton>
        ))
      }
    </MockkongStyled.Plans>
  )
}

export default Plans;