import React, { useState, useEffect } from 'react';

//Hooks for breakpoints
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//To decode the token
import decode from 'jwt-decode';

//material ui
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

//render mobile breakpoint
const MobileBreakpoint = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const openUser = Boolean(anchorElUser);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  //usersData set with reducer
  //this is required to observe redux store and render the component when store has changed.
  // const user = useSelector((state) => {
  //   return state.authReducer.authData;
  // });

  const user = JSON.parse(localStorage.getItem('profile'));

  const logout = () => {
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
  //Breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton size="large" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100vw',
              marginLeft: '-4vw',
              height: '70vw',
              rowGap: '20px',
            }}
          >
            <>
              {user ? (
                <>
                  <Button
                    sx={{
                      borderBottom: '1px solid #502D5C',
                      width: '100vw',
                    }}
                    variant="container"
                    href="/"
                  >
                    Home
                  </Button>
                  <Button
                    sx={{
                      borderBottom: '1px solid #502D5C',
                      width: '100vw',
                    }}
                    href="/about"
                    variant="container"
                  >
                    About
                  </Button>
                  <Button
                    sx={{
                      borderBottom: '1px solid #502D5C',
                      width: '100vw',
                    }}
                    href="/profile"
                    variant="container"
                  >
                    Profile
                  </Button>
                  <Button
                    sx={{
                      borderBottom: '1px solid #502D5C',
                      width: '100vw',
                    }}
                    href="/posts/new"
                    variant="container"
                  >
                    Create a Post
                  </Button>
                  <Button
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                    }}
                    variant="container"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    sx={{
                      borderBottom: '1px solid #502D5C',
                      width: '100vw',
                    }}
                    variant="container"
                    href="/"
                  >
                    Home
                  </Button>
                  <Button
                    sx={{
                      borderBottom: '1px solid #502D5C',
                      width: '100vw',
                    }}
                    href="/about"
                    variant="container"
                  >
                    About
                  </Button>
                  <Button href="/login" variant="container">
                    Login
                  </Button>
                </>
              )}
            </>
          </Container>
        </Menu>
      </Box>
    </>
  );
};
export default MobileBreakpoint;
