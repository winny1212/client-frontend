import Typography from '@mui/material/Typography';

const FormLabel = ({ children }) => {
  return (
    <Typography
      component="p"
      variant="subtitle1"
      sx={{ textAlign: 'left', mt: 1.5 }}
    >
      {children}
    </Typography>
  );
};

export default FormLabel;
