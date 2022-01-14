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
import { StyledBtn } from '../shared/StyledButtons';

//render mobile breakpoint
const MobileBreakpoint = () => {
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
              variant="container"
              href="/about"
            >
              About
            </Button>
            <Button
              sx={{
                borderBottom: '1px solid #502D5C',
                width: '100vw',
              }}
              variant="container"
              href="/login"
            >
              Login
            </Button>
            <Button href="/posts/new" variant="container">
              Create a Post
            </Button>
          </Container>
        </Menu>
      </Box>
    </>
  );
};
export default MobileBreakpoint;
