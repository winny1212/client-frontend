import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';

const IconText = ({ label, children }) => {
  return (
    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center' }}>
      {children}
      <Typography variant="body2" sx={{ fontWeight: 600, ml: 0.85 }}>
        {label}
      </Typography>
    </Box>
  );
};

export default IconText;
