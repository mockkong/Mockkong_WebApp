import React from 'react';
import { CommonStyled } from './CommonStyled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SignIn from '../sign/SignIn';

function Navbar({...props}: any) {
  return (
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
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>

            <SignIn />
          </Toolbar>
        </AppBar>
      </Box>
    </CommonStyled.Navbar>
  )
}

export default Navbar