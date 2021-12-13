import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  TextField,
  Container,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import useStyles from './styles';
import Input from './Input';

export default function Register() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleChange = () => {};
  const handleSubmit = () => {};

  const switchMode = () => {
    setIsSignup((preIsSignup) => !preIsSignup);
    handleShowPassword(false);
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

        <form>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="username"
                  label="Username"
                  handleChange={handleChange}
                  type="username"
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
                  type="location"
                />
                <Input
                  name="media"
                  label="Social media"
                  handleChange={handleChange}
                  type="media"
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
