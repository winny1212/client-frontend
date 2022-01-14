import Typography from '@mui/material/Typography';

const HelperText = ({ children, ...rest }) => {
  return (
    <Typography
      component="p"
      variant="caption"
      sx={{ mt: '3px', mx: '14px', mb: 0, px: '14px', color: 'textGrey' }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default HelperText;
