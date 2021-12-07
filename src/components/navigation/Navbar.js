import React from 'react';
//import { Box, AppBar, MenuIcon, Toolbar, Button } from '@mui/material';
//import Logo from '../../assets/comps/diyg_logo_purple.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <MenuIcon>{Logo}</MenuIcon>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Register</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box> */}

      <div className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/create">Create Post</Link>
        </li>
      </div>
    </>
  );
}

export default Navbar;
