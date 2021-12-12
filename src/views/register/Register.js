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
  const isSignup = true;
  const handleChange = () => {};
  const handleSubmit = () => {};

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
                  margin="5px 15px 0 "
                >
                  <Typography variant="h5" sx={{ marginRight: 8 }}>
                    Are you a dog groomer
                  </Typography>
                  <FormControlLabel control={<Checkbox />} label="Yes" />
                  <FormControlLabel control={<Checkbox />} label="No" />
                </Grid>

                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  margin="0 15px 0 "
                >
                  <Typography variant="h5" sx={{ marginRight: 8 }}>
                    Are you a professional dog groomer
                  </Typography>
                  <FormControlLabel control={<Checkbox />} label="Yes" />
                  <FormControlLabel control={<Checkbox />} label="No" />
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
        </form>
      </Paper>
    </Container>
  );
}
