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
                <Typography variant="h5">I'm a dog groomer</Typography>
                <FormControlLabel control={<Checkbox />} label="Yes" />
                <FormControlLabel control={<Checkbox />} label="No" />

                <Typography variant="h5">
                  I am a professional dog groomer
                </Typography>
                <FormControlLabel control={<Checkbox />} label="Yes" />
                <FormControlLabel control={<Checkbox />} label="No" />
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
