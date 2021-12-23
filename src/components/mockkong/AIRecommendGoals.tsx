import React from 'react';
import { MockkongStyled } from './MockkongStyled';

const Goal = ({ ...props }) => {
  const { goal } = props;
  return (
    <div key={"Goal_" + goal?.id} className="Goal">
      <div>
        {goal?.goalName}
      </div>
      <div dangerouslySetInnerHTML={{__html: goal?.plan}}>
      </div>
    </div>
  )
}

function AIRecommendGoals({ ...props }) {
  const { title, data } = props;
  
  return (
    <MockkongStyled.AIRecommendGoals className="AIRecommendGoals">
      <h3>{title}</h3>
      <div className="Goal-Card">
        {data && data.map((goal)=> <Goal goal={goal} /> )}
      </div>
    </MockkongStyled.AIRecommendGoals>
    
  )
}

export default AIRecommendGoals