import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import useStyles from './styles';

export default function Register() {
  const classes = useStyles();
  const isSignup = false;

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar sx={{ margin: 1, backgroundColor: 'secondary.light' }}>
          <LockIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          {isSignup ? 'Sign up' : 'Sign in'}
        </Typography>
      </Paper>
    </Container>
  );
}
