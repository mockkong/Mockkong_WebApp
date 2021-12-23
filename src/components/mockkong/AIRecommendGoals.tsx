import React from 'react';
import { MockkongStyled } from './MockkongStyled';

function AIRecommendGoals({ ...props }) {
  const { title, data } = props;
  
  return (
    <MockkongStyled.AIRecommendGoals className="AIRecommendGoals">
      <h3>{title}</h3>

      <div className="Goal-Card">
        {data && 
            data.map((goal)=> {
              const { title, contents } = goal;
              return (
                <div key={"Goal_" + goal?.id} className="Goal">
                  <div>
                    {title}
                  </div>
                  <div dangerouslySetInnerHTML={{__html: contents}}>
                  </div>
                </div>
              )
            })
          }
      </div>
    </MockkongStyled.AIRecommendGoals>
    
  )
}

export default AIRecommendGoals