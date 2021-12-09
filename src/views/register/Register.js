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

export default function Register() {
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <Avatar>
          <LockIcon />
        </Avatar>
      </Paper>
    </Container>
  );
}
