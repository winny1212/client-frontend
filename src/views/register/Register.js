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

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
      </Paper>
    </Container>
  );
}
