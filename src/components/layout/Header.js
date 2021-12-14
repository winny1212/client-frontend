import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Header = ({ title, color }) => {
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        bgcolor: 'accentYellow.main' || color,
      }}
    >
      <Typography variant="headerTitle" sx={{ p: '1rem' }}>
        Find tips and tricks to groom your beloved pets
      </Typography>
    </Box>
  );
};

export default Header;
