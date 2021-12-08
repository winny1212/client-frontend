import React, { useState } from 'react';

// Custom style hook
import useStyles from './styles';

// Material UI
import { Paper, Container, TextField, Typography, Button } from '@mui/material';

function Form() {
  // Invoke the styles
  const classes = useStyles();

  // Post state
  const [postData, setPostData] = useState({
    title: '',
    videoLink: '',
    instructions: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
    console.log(postData);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <Container fixed>
      <Paper elevation={2} className={classes.paper}>
        <form
          className={`${classes.form} ${classes.root}`}
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
          <Typography variant="h4" gutterBottom component="div" pt={2} mt={2}>
            Create A Post
          </Typography>
          <TextField
            autoFocus={true}
            fullWidth
            required
            variant="outlined"
            name="title"
            autoComplete="off"
            label="Title"
            color="secondary"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            fullWidth
            required
            variant="outlined"
            name="videoLink"
            autoComplete="off"
            label="Video Link"
            color="secondary"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            name="instructions"
            variant="outlined"
            label="Instructions"
            color="secondary"
            fullWidth
            multiline
            rows={4}
            required
            onChange={(e) => handleChange(e)}
          />
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            size="large"
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Form;
