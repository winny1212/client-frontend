import React from 'react';
import { getYear } from '../../utils/general';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: '1rem',
        mt: '2rem',
        margin: 'auto',
        // backgroundColor: 'primary.main',
        width: '100vw',
      }}
    >
      <Typography variant="role">DIY GROOMING &copy; {getYear()}</Typography>
    </Box>
  );
};

export default Footer;
