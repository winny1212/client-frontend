import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';

const ProGroomer = () => {
  return (
    <Box component="span" sx={{ display: 'inline-flex' }}>
      <VerifiedTwoToneIcon
        color="secondary"
        fontSize="small"
        sx={{ mr: 0.75 }}
      />
      <Typography variant="caption" sx={{ textTransform: 'uppercase' }}>
        Pro Groomer
      </Typography>
    </Box>
  );
};

export default ProGroomer;
