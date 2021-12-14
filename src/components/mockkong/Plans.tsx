import React from 'react';
import { MockkongStyled } from './MockkongStyled';

function Plans({ data }) {
  return (
    <MockkongStyled.Plans className="Plan">
      {data && 
          data.map((plan)=> {
            const { title, contents, coverImage, date, author, slug} = plan;
            return (
              <MockkongStyled.Plan className="Plan">
                <div>
                  {title}
                </div>
                <div>
                  {coverImage}
                </div>
                <div>
                  {contents}
                </div>
                <div>
                  {date}
                </div>
                <div>
                  {author}
                </div>
              </MockkongStyled.Plan>
            )
          })
        }
    </MockkongStyled.Plans>
    
  )
}

export default Plans