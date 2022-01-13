import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  FormControlLabel,
  fabClasses,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
  Box,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import useStyles from './styles';
import Input from './Input';

// Components
import Header from '../../components/layout/Header';
import { StyledBtn } from '../../components/shared/StyledButtons';

// Import Actions
import { signIn, signUp } from '../../actions/auth';

const initialState = {
  username: '',
  proGroomer: false,
  location: '',
  socMedia: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const validateInput = (str = '') => str.includes('@');

export default function Auth() {
  const dispatch = useDispatch();
  // let navigate = useNavigate();
  let navigate = useNavigate();

  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  // Form Data State
  const [formData, setFormData] = useState(initialState);

  // Toggling the Password privacy button.
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  // Toggling between Sign up and Sign In
  const switchMode = () => {
    setIsSignup((preIsSignup) => !preIsSignup);

    handleShowPassword(false);
  };

  // Will update our formData with its respective field.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // We should compare if the two passwords entered are correct.
    // Do User Sign up checks.
    if (isSignup) {
      console.log('Formdata is:', formData);
      console.log('Signing Up');

      // We dispatch the Sign Up Action
      dispatch(signUp(formData));

      console.log('Sent to Dispatch');

      // Redirect to Home
      navigate('/');
    } else {
      console.log(formData);
      console.log('Signing In');

      dispatch(signIn(formData));

      navigate('/');
      // dispatch(signIn(formData), navigate);
    }
  };

  return (
    <div data-testid="form">
      <Header title={isSignup ? 'Register' : 'Login'} />
      <Container component="main" maxWidth="md" sx={{ marginTop: 3 }}>
        <Paper className={classes.paper} elevation={0}>
          <Avatar sx={{ margin: 1, backgroundColor: 'secondary.light', my: 3 }}>
            <LockIcon />
          </Avatar>

          {/* <Typography component="h1" variant="h5">
            {isSignup ? 'Sign up' : 'Sign in'}
          </Typography> */}

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {isSignup && (
                <>
                  <Input
                    name="username"
                    label="Username"
                    data-testid="nameInput"
                    handleChange={handleChange}
                    type="text"
                    required
                  />

                  <Grid
                    item
                    direction="row"
                    justifyContent="flex-start"
                    // margin="15px 0 5px 0 "
                    sx={{ mt: 1, ml: 1 }}
                  >
                    <Typography variant="subtitle1" sx={{ marginRight: 8 }}>
                      Are you a professional dog groomer?
                    </Typography>
                    <FormControl component="fieldset">
                      <FormLabel component="legend"></FormLabel>
                      <RadioGroup row name="row-radio-buttons-group">
                        <FormControlLabel
                          value="Yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="No"
                          control={<Radio />}
                          label="No"
                        />
                        {/* <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Other"
                          /> */}
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Input
                    name="location"
                    label="Location"
                    handleChange={handleChange}
                    type="text"
                  />
                  <Input
                    name="socMedia"
                    label="Social media"
                    handleChange={handleChange}
                    type="text"
                  />
                </>
              )}

              <Input
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
                required
              />
              <Input
                name="password"
                label="Password"
                required
                handleChange={handleChange}
                type={!showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
              />
              {isSignup && (
                <Input
                  name="confirmPassword"
                  label="Confirm Password"
                  required
                  handleChange={handleChange}
                  type="password"
                />
              )}
            </Grid>
            <StyledBtn
              role="button"
              type="submit"
              data-testid="submit"
              fullWidth
              // sx={{ mt: 2 }}
              // variant="contained"
              // color="secondary"
              // className={classes.submit}
            >
              {isSignup ? 'Register' : 'Login'}
            </StyledBtn>

            <Grid container sx={{ justifyContent: 'center', pb: 3 }}>
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup
                    ? 'Already have an account? Please login'
                    : "Don't have an account? Register now"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
