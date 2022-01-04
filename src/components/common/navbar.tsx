import React, { useState } from 'react';
import Router from 'next/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { CommonStyled } from 'contexts/styles/CommonStyled';
import MenuIcon from '@mui/icons-material/Menu';

import Sidebar from 'components/Sidebar';
// import SignIn from '../sign/SignIn';

function Navbar({...props}: any) {
  const [isOpen, setIsOpen] = useState(true);

  const drawerToggle = () => {
    setIsOpen(!isOpen);
  }

  const logout = () => {
    if(confirm("Are you sure?")) {
      localStorage.removeItem("mockkong_data$$user_data")
      Router.push("/signin");
    }
  }
  
  return (
    <>
      <CommonStyled.Navbar className="Navbar">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={drawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Logo
              </Typography>

              <Button color="inherit" onClick={logout}>Logout</Button>
              {/* <SignIn /> */}
            </Toolbar>
          </AppBar>
        </Box>

      </CommonStyled.Navbar>
      <Sidebar drawerOpen={isOpen} drawerToggle={drawerToggle} />
    </>
  )
}

export default Navbar