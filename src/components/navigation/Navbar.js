import React, { useState, useEffect } from 'react';

import NavBarLinks from './NavBarLinks';

//material ui
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

//logo
import Logo from '../shared/Logo';

function Navbar() {
  return (
    <>
      <AppBar position="static" elevation={0} color="accentYellow">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo />
            <NavBarLinks />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
