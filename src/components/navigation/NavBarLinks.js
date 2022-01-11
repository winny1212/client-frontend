// on this file is implemented responsive breakpoint

import React, { useState } from 'react';

//Hooks for breakpoints
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

//material ui
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

const NavBarLinks = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const openUser = Boolean(anchorElUser);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //Breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  //login User logic for rendering
  const LoginUser = (user, logout) => (
    <>
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
    </>
  );

  //render mobile breakpoint
  const MobileNavBar = () => (
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
              // position: 'relative',
              bgcolor: 'accentYellow.main',
              paddingTop: 0,
              paddingBottom: 0,
            }}
          >
            <Button variant="container" href="/">
              Home
            </Button>
            <Button variant="container" href="/register">
              Register
            </Button>
            <Button variant="container" href="/about">
              About
            </Button>
            <Button variant="container" href="/login">
              Login
            </Button>
            <Button variant="container" href="/create">
              Create a Post
            </Button>
          </Container>
        </Menu>
      </Box>
    </>
  );

  //render Desktop breakpoint
  const DesktopNavBar = (user) => (
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
        <LoginUser user={{ user }} />
      </Container>
    </>
  );

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {isMobile ? <MobileNavBar /> : <DesktopNavBar />}
      </Box>
    </div>
  );
};

export default NavBarLinks;
