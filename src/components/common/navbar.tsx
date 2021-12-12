import React from 'react';
import SignIn from '../sign/SignIn';
import { CommonStyled } from './CommonStyled';

function Navbar({...props}: any) {
  return (
    <CommonStyled.NavBar>
      <SignIn />
    </CommonStyled.NavBar>
  )
}

export default Navbar