import React, { useState } from 'react';

// Redux State
import { useDispatch } from 'react-redux';

// Dispatch Action
import { createPost } from '../../actions/posts';

// Custom style hook
import useStyles from './styles';

// Material UI
import { Paper, Container, TextField, Typography, Button } from '@mui/material';

function Form() {
  // Invoke Redux State
  const dispatch = useDispatch();

  // Invoke the styles
  const classes = useStyles();

  // Get the User - we will use to assign it to post.
  const user = JSON.parse(localStorage.getItem('profile'));

  // Post state
  const [postData, setPostData] = useState({
    title: '',
    videoLink: '',
    instructions: '',
  });

  // Client side validation
  const [titleError, setTitleError] = useState(false);
  const [videoLinkError, setLinkError] = useState(false);
  const [instructionsError, setInstructionError] = useState(false);

  // Submit Handler - make the dispatch here
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setLinkError(false);
    setInstructionError(false);

    if (postData.title === '') {
      setTitleError(true);
    }
    if (postData.videoLink === '') {
      setLinkError(true);
    }
    if (postData.instructions === '') {
      setInstructionError(true);
    }
    if (postData.title && postData.videoLink && postData.instructions) {
      // THis code is very important- keep around so we can actually make posts.
      dispatch(createPost({ ...postData, username: user?.result?.username }));
      clear();
    }
  };

  // Every keystroke change this function will be called.
  // Very DRY code to get each data, more dynamic when form is more complex
  function handleChange(event) {
    const { name, value } = event.target;
    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Clear - sets all inputs to blank
  const clear = () => {
    setPostData({
      title: '',
      videoLink: '',
      instructions: '',
    });
  };

  if (!user?.result?.username) {
    return (
      <Paper elevation={2} className={classes.paper}>
        <Typography variant="h6" pt={2} mt={2} align="center">
          Please Sign in to add a Post...
        </Typography>
      </Paper>
    );
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
            name="title"
            value={postData.title}
            autoFocus={true}
            fullWidth
            required
            variant="outlined"
            autoComplete="off"
            label="Title"
            color="secondary"
            onChange={(e) => handleChange(e)}
            error={titleError}
          />
          <TextField
            name="videoLink"
            value={postData.videoLink}
            fullWidth
            required
            variant="outlined"
            autoComplete="off"
            label="Video Link"
            color="secondary"
            onChange={(e) => handleChange(e)}
            error={videoLinkError}
          />
          <TextField
            name="instructions"
            value={postData.instructions}
            variant="outlined"
            label="Instructions"
            color="secondary"
            fullWidth
            multiline
            rows={4}
            required
            onChange={(e) => handleChange(e)}
            error={instructionsError}
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
