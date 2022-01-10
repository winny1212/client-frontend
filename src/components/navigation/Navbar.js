import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

// State Managers
import { useDispatch } from 'react-redux';
// To decode the token
import decode from 'jwt-decode';

// import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
// import Logo from '../../assets/img/diyg_logo_purple.png';
import Logo from '../shared/Logo';

//Hooks for breakpoints
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useStyles } from '../../components/navigation/styles';

function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const openUser = Boolean(anchorElUser);

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
  }, [location]);

  // get user
  if (user?.result) {
    console.log('User is:');
    console.log(user.result);
  }

  //usersData set with reducer
  const profile = useSelector((state) => {
    return state.profileReducer;
  });

  //styles
  const classes = useStyles();
  // console.log(classes.navBackground);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //Breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <AppBar position="static" elevation={0} color="accentYellow">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <img src={Logo} alt="logo" className={classes.logo} /> */}
            <Logo />

            <Box
              sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}
            >
              {isMatch ? (
                <>
                  <Container
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}
                  >
                    <Button variant="container" href="/">
                      Home
                    </Button>
                    <Button href="/about" variant="container">
                      About
                    </Button>

                    {/* logic for render routes if user is login  */}
                    {user ? (
                      <>
                        <Button href="/profile" variant="container">
                          Profile
                        </Button>
                        <Button href="/posts/new" variant="container">
                          Create a Post
                        </Button>
                        <Button href="/" onClick={logout} variant="container">
                          Logout
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button href="/register" variant="container">
                          Register
                        </Button>
                        <Button href="/login" variant="container">
                          Login
                        </Button>
                      </>
                    )}
                  </Container>
                </>
              ) : (
                <>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton
                        size="large"
                        onClick={handleOpenUserMenu}
                        sx={{ p: 0 }}
                      >
                        <MenuIcon />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={openUser}
                      onClose={handleCloseUserMenu}
                    >
                      <Container>
                        <Button href="/" variant="container">
                          Home
                        </Button>
                        <Button href="/register" variant="container">
                          Register
                        </Button>
                        <Button href="/about" variant="container">
                          About
                        </Button>
                        <Button href="/login" variant="container">
                          Login
                        </Button>
                        <Button href="/create" variant="container">
                          Create a Post
                        </Button>
                      </Container>
                    </Menu>
                  </Box>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
