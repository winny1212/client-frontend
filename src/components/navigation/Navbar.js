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
  // We must make sure when token expires, the user is logged out.
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/auth');
    setUser(null);
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

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location, user, navigate, logout]);

  // get user
  if (user?.result) {
    console.log('User is:');
    console.log(user.result);
  }

  //usersData set with reducer
  const profile = useSelector((state) => {
    return state.profileReducer;
  });

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
