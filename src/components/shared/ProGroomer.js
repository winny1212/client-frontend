import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';

const ProGroomer = ({ icon }) => {
  return (
    <Box component="span" sx={{ display: 'inline-flex', mt: 0.5 }}>
      <VerifiedTwoToneIcon
        color="secondary"
        fontSize="small"
        sx={{ mr: 0.75 }}
      />
      {!icon && (
        <Typography variant="role" sx={{ textTransform: 'uppercase' }}>
          Professional Groomer
        </Typography>
      )}
    </Box>
  );
};

export default ProGroomer;
