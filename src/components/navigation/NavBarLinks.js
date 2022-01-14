import React, { useState } from 'react';
import MobileBreakpoint from './MobileBreakpoint';
import DesktopBreakpoint from './DesktopBreakpoint';

//Hooks for breakpoints
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

//material ui
import Box from '@mui/material/Box';

const NavBarLinks = () => {
  //Breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {isMobile ? <MobileBreakpoint /> : <DesktopBreakpoint />}
      </Box>
    </>
  );
};

export default NavBarLinks;
