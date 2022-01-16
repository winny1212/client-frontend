// import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const StyledBtn = ({ sx, children, ...inputProps }) => {
  return (
    <Button
      {...inputProps}
      variant="contained"
      disableElevation
      sx={{
        borderRadius: '1.5rem',
        px: '1.5rem',
        py: 1,
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export const StyledBtnOutlined = (props) => {
  const { sx, children, ...inputProps } = props;
  return (
    <Button
      {...inputProps}
      variant="outlined"
      disableElevation
      sx={{
        px: '1.5rem',
        py: 1,
        borderRadius: '1.5rem',
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};
