import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Logo from '../../assets/img/diyg_logo_purple.png';

//Hooks for breakpoints
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useStyles } from '../../components/navigation/styles';

function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const openUser = Boolean(anchorElUser);

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
            <img src={Logo} alt="logo" className={classes.logo} />

            <Box sx={{ flexGrow: 1 }}>
              {isMatch ? (
                <>
                  <Container>
                    <Button variant="container" href="/">
                      Home
                    </Button>
                    <Button href="/about" variant="container">
                      About
                    </Button>

                    {/* logic for render routes if user is login  */}
                    {profile ? (
                      <>
                        <Button href="/profile" variant="container">
                          Profile
                        </Button>
                        <Button href="/create" variant="container">
                          Create a Post
                        </Button>
                        <Button href="/logout" variant="container">
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
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
