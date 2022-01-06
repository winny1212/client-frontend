import LogoPurple from '../../assets/img/diyg_logo_purple.png';
import LogoWhite from '../../assets/img/diyg_logo_white.png';
import { Link } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';

function Logo({ white }) {
  return (
    <Link to="/">
      <Box
        sx={{
          height: '42px',
          pt: '0.5rem',
        }}
      >
        {white ? (
          <img
            src={LogoWhite}
            alt="DIY Grooming"
            style={{ height: 'inherit' }}
          />
        ) : (
          <img
            src={LogoPurple}
            alt="DIY Grooming"
            style={{ height: 'inherit' }}
          />
        )}
      </Box>
    </Link>
  );
}

export default Logo;
