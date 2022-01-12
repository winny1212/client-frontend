import Typography from '@mui/material/Typography';

const HelperText = ({ children }) => {
  return (
    <Typography
      component="p"
      variant="caption"
      sx={{ mt: '3px', mx: '14px', mb: 0, px: '14px', color: 'textGrey' }}
    >
      {children}
    </Typography>
  );
};

export default HelperText;
