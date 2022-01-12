import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Input = ({
  name,
  handleChange,
  label,
  autoFocus,
  type,
  handleShowPassword,
  ...inputProps
}) => (
  <Grid item xs={12}>
    <TextField
      {...inputProps}
      name={name}
      onChange={handleChange}
      variant="outlined"
      color="secondary"
      // required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      InputProps={
        name === 'password'
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {type === 'password' ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  </Grid>
);

export default Input;
