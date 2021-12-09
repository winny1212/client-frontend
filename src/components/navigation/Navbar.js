import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

//Hooks for breakpoints
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const openNav = Boolean(anchorElNav);
  const openUser = Boolean(anchorElUser);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //Breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <AppBar position="static" elevation={0} color="secondary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              DIY Grooming
            </Typography> */}

            <Box sx={{ flexGrow: 1 }}>
              {isMatch ? (
                <>
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
