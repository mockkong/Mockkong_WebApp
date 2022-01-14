import React, { useRef }from 'react';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import * as api from 'app/api';

const style = {
  position: 'relative',
  textAlign: 'center',
  width: '230px',
  height: 'fit-content',
  padding: '30px 0px 10px 0px',
  border: '1px solid gray'
};

export default function UserProfile({ openRegisterGoal, userData }: any) {
  const bubblyButtons = useRef<HTMLButtonElement>();

  // useEffect(() => {
  //   if(bubblyButtons) {
  //     console.log(bubblyButtons.current.length)
  //     for (let i = 0; i < bubblyButtons.current.length; i++) {
  //       bubblyButtons[i].addEventListener('click', animateButton, false);
  //     }
  //   }
  // }, [])

  const animateButton = function(e) {
    e.preventDefault();
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };

  return (
    <Box sx={style}>
      <div className='wave-box'></div>

      <AccountCircleIcon sx={{ fontSize: 90, mb: 2, color: 'gray' }} />
      
      <Typography component="h5" variant="h5" sx={{ mb: 3 }}>
        {userData?.name}
      </Typography>
      
      <Typography component="p" variant="subtitle1" sx={{ mb: 3 }}>
        {userData?.email}
      </Typography>

      <Typography component="span" variant="subtitle2" sx={{ mb: 3 }}>
        #개발자 #독서 #운동
      </Typography>

      <button ref={bubblyButtons} className="bubbly-button" onClick={openRegisterGoal}>
        Create Goal
      </button>
    </Box>
  )
}

export async function getStaticProps({...props}) {
  const userData = await api.getUserData();
  console.log('userDatdda', userData);

  const data = {
    userData,
  };
  return {
    props: { data },
  }
}