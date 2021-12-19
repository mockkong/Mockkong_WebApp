import React from 'react';
import { MockkongStyled } from './MockkongStyled';

function Goals({ data }) {
  const getPlans = (plans: any) => {
    console.log(plans);

    return (
      <div className="Plans">
      {plans &&
        plans.map((plan)=>{
          return (
            <div>
                <div>
                  {plan.id}
                </div>
                <div>
                  {plan.plan}
                </div>
              </div>
            )
        })}
      </div>
    )
  }

  return (
    <MockkongStyled.Goals className="Goals">
      <h3>My Goals</h3>

      <div className="">
        {data && 
            data.map((goal)=> {
              const { title, plans } = goal;
              return (
                <div className="Goal">
                  <div>
                    {title}
                  </div>
                  {getPlans(plans)}
                </div>
              )
            })
          }
      </div>
    </MockkongStyled.Goals>
    
  )
}

export default Goals;