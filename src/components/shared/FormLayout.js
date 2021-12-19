// MUI
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const FormLayout = ({ children }) => {
  return (
    <>
      <Paper elevation={0} sx={{ p: '1.5rem' }}>
        {children}
      </Paper>
    </>
  );
};

export default FormLayout;
