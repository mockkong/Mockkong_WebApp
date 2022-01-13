import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Typography from '@mui/material/Typography';
import { MockkongStyled } from '../MockkongStyled';

function AIRecommendGoals({ ...props }) {
  const { title, data } = props;

  const addCard = (id: string): void => {
    console.log('addCard', id)
  }
  
  return (
    <MockkongStyled.AIRecommendGoals className="AIRecommendGoals">
      <Typography component="h5" variant="h5" sx={{ mb: 1, color: 'var(--colors-primary)' }}>{title}</Typography>
      <div className="Goal_Card">
        
        <div className="card" onClick={() =>addCard('1')}>
          <div className="img-box">
            <img src="https://images.pexels.com/photos/1699030/pexels-photo-1699030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Moon" title="Moon"/>
          </div>          
          <div className="details">
            <h2>하루에 스쿼트 100개</h2>
            <p>스쿼트 100개로 근육량을 늘려 보자!! <br/>사람에게 필수적인 근육은 신진 대사를 늘리고 체온을 조절한다!!</p>
          </div>
        </div>
        
        <div className="card" onClick={() =>addCard('2')}>
          <div className="img-box">
            <img src="https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Landscape" title="Landscape"/>
          </div>
          <div className="details">
            <h2>하루 1시간만 휴대폰
            </h2>
            <p>사람이 하루종일 휴대폰과 컴퓨터 모니터를 보고 있다는 사실을 아시나요? 1시간만 안봐도</p>
          </div>
        </div>
        
        <div className="card" onClick={() =>addCard('3')}>
          <div className="img-box">
            <img src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Mountain" title="Mountain"/>
          </div>
          <div className="details">
            <h2>Lorem Ispum Dolar</h2>
            <p>사람이 하루종일 휴대폰과 컴퓨터 모니터를 보고 있다는 사실을 아시나요? 1시간만 안봐도</p>
          </div>
        </div>
        
        <div className="card" onClick={() =>addCard('4')}>
          <div className="img-box">
            <img src="https://images.pexels.com/photos/1381242/pexels-photo-1381242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Camera" title="Camera"/>
          </div>
          <div className="details">
            <h2>Lorem Ispum Dolar</h2>
            <p>사람이 하루종일 휴대폰과 컴퓨터 모니터를 보고 있다는 사실을 아시나요? 1시간만 안봐도</p>
          </div>
        </div>

      <AddBoxIcon />
      </div>
    </MockkongStyled.AIRecommendGoals>
    
  )
}

export default AIRecommendGoals