// MUI
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Paper elevation={0} sx={{ p: '1.5rem', mb: '1rem' }}>
        {children}
      </Paper>
    </>
  );
};

export default BaseLayout;
