import React from 'react';
import { MockkongStyled } from './MockkongStyled';

function MyGoals({ data }) {
  const getPlans = (goal: any) => {
    const { _id, plan, period } = goal;
    const plans = [];
    console.log('getPlans', goal);

    if(plan && period) {
      for(let i=0; i<period; i++) {
        const key = "Goal_" + _id + "_" + "Plan_" + i;
        plans.push(
          <div key={key}>
            {plan.plan}
          </div>
        )
      }
    }
  }

  return (
    <MockkongStyled.Goals className="Goals">
      <h3>My Goals</h3>

      <div className="">
        {data && 
            data.map((goal)=> {
              const { _id, goalName, plan, period } = goal;
              return (
                <div key={"Goal_" + _id} className="Goal">
                  <div>
                    {goalName}
                  </div>
                  <div className="Plans">
                    {() => getPlans(goal)}
                  </div>
                </div>
              )
            })
          }
      </div>
    </MockkongStyled.Goals>
    
  )
}

export default MyGoals;