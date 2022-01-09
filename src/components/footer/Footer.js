import React from 'react';
import { getYear } from '../../utils/general';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: '1.5rem', pt: '2rem', margin: 'auto' }}>
      <p>DIY GROOMING &copy; {getYear()}</p>
    </Box>
  );
};

export default Footer;
