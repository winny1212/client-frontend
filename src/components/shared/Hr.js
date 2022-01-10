import Divider from '@mui/material/Divider';

const Hr = ({ children }) => {
  return <Divider sx={{ my: { xs: 2, md: 2.5 } }}>{children}</Divider>;
};

export default Hr;
