import Button from '@mui/material/Button';

export const StyledBtn = ({ children }) => {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={{
        px: '1.8rem',
        borderRadius: '1.5rem',
      }}
    >
      {children}
    </Button>
  );
};

export const StyledBtnOutlined = ({ children }) => {
  return (
    <Button
      variant="outlined"
      disableElevation
      sx={{
        px: '1.8rem',
        borderRadius: '1.5rem',
      }}
    >
      {children}
    </Button>
  );
};
