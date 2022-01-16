import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Header = ({ title, color, sx }) => {
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        pb: '2.5rem',
        mb: '2rem',
        height: 200,
        bgcolor: color || 'accentYellow.main',
        ...sx,
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
