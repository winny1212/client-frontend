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
        mb: '2rem',
        height: 150,
        bgcolor: color || 'accentYellow.main',
      }}
    >
      <Typography component="h1" variant="headerTitle" sx={{ p: '1rem' }}>
        {title || `Change header title`}
      </Typography>
    </Box>
  );
};
export default Header;
