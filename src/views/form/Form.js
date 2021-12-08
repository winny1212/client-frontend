import React from 'react';

// Custom style hook
import useStyles from './styles';

// Material UI
import { Paper, Container, TextField, Typography } from '@mui/material';

function Form() {
  const classes = useStyles();

  return (
    <Container fixed>
      <Paper elevation={2}>
        <Typography variant="h3" gutterBottom component="div" pt={2} mt={2}>
          Create A Post
        </Typography>
      </Paper>
    </Container>
  );
}

export default Form;
