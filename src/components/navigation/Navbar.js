import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBarLinks from './NavBarLinks';

// State Managers
import { useDispatch } from 'react-redux';
// To decode the token
import decode from 'jwt-decode';

//material ui
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

//logo
import Logo from '../shared/Logo';

function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  //usersData set with reducer
  //this is required to observe redux store and render the component when store has changed.
  const user = useSelector((state) => {
    return state.authReducer.authData;
  });

  const logout = (e) => {
    e.preventDefault();

    dispatch({ type: 'LOGOUT' });
    navigate('/auth');
  };

  useEffect(() => {
    const token = user?.token;

    // The logic to log out after a certain time.
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  });

  return (
    <>
      <AppBar position="static" elevation={0} color="accentYellow">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo />
            <NavBarLinks user={user} logout={logout} />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
