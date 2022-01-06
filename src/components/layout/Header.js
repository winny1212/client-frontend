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
        height: 200,
        bgcolor: color || 'accentYellow.main',
      }}
    >
      <Typography
        component="h1"
        variant="headerTitle"
        fontSize={{ md: '2rem' }}
        sx={{ p: '1rem', textAlign: 'center' }}
      >
        {title || `Change header title`}
      </Typography>
    </Box>
  );
};
export default Header;
