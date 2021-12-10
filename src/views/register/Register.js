import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  TextField,
  Container,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import useStyles from './styles';
import Input from './Input';

export default function Register() {
  const classes = useStyles();
  const isSignup = false;
  const handleChange = () => {};
  const handleSubmit = () => {};

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar sx={{ margin: 1, backgroundColor: 'secondary.light' }}>
          <LockIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          {isSignup ? 'Sign up' : 'Sign in'}
        </Typography>

        <form>
          <Grid container spacing={2}>
            {isSignup && <></>}

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
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
