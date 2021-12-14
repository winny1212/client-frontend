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
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import useStyles from './styles';
import Input from './Input';

// Import Actions
import { signup, signin } from '../../actions/auth';

const initialState = {
  username: '',
  proGroomer: false,
  location: '',
  socMedia: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function Register() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

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

    if (isSignup) {
      // We dispatch the Sign Up Action
      dispatch(signup(formData), navigate);
    } else {
      // We dispatch the Sign In Action
      dispatch(signin(formData), navigate);
    }
  };

  return (
    <Container component="main" maxWidth="md" sx={{ marginTop: 3 }}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar sx={{ margin: 1, backgroundColor: 'secondary.light' }}>
          <LockIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          {isSignup ? 'Sign up' : 'Sign in'}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="username"
                  label="Username"
                  handleChange={handleChange}
                  type="text"
                />

                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  margin="10px 15px 0 "
                >
                  <Typography
                    variant="h5"
                    sx={{ marginRight: 8, fontSize: 22 }}
                  >
                    Are you a dog groomer?
                  </Typography>
                  <FormControlLabel
                    color="secondary"
                    control={<Checkbox />}
                    label="Yes"
                  />
                  <FormControlLabel
                    color="secondary"
                    control={<Checkbox />}
                    label="No"
                  />
                </Grid>

                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  margin="0 15px 0 "
                >
                  <Typography
                    variant="h5"
                    sx={{ marginRight: 8, fontSize: 22 }}
                  >
                    Are you a professional dog groomer?
                  </Typography>
                  <FormControlLabel
                    color="secondary"
                    control={<Checkbox />}
                    label="Yes"
                  />
                  <FormControlLabel
                    color="secondary"
                    control={<Checkbox />}
                    label="No"
                  />
                </Grid>

                <Input
                  name="location"
                  label="Your service location"
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
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            sx={{ marginTop: 2 }}
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Button color="secondary" onClick={switchMode}>
                {isSignup
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
