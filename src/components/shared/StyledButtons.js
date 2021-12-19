import Button from '@mui/material/Button';

export const StyledBtn = (props) => {
  const { children, ...inputProps } = props;
  return (
    <Button
      {...inputProps}
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

export const StyledBtnOutlined = (props) => {
  const { children, ...inputProps } = props;
  return (
    <Button
      {...inputProps}
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
