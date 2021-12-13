import React, { useState, useEffect, useContext } from 'react';

// Redux State
import { useDispatch, useSelector } from 'react-redux';

// UserContext
import { UserContext } from '../../Context/UserContext';

// Dispatch Action
import { updatePost } from '../../actions/posts';

// Custom style hook
import useStyles from './styles';

// Material UI
import { Paper, Container, TextField, Typography, Button } from '@mui/material';

function UpdateForm() {
  // UserContext
  const { currentId, setCurrentId } = useContext(UserContext);
  console.log(currentId);

  // Invoke Redux State
  const dispatch = useDispatch();
  // Invoke the styles
  const classes = useStyles();

  // Get the post from state we actually want to update.
  const post = useSelector((state) =>
    currentId
      ? state.postsReducer.find((post) => post._id === currentId)
      : null,
  );

  useEffect(() => {
    // If we have the post we are looking for, populate all fields with the data,
    // This is possible because teh fields are closed forms.
    if (post) {
      setPostData(post);
    }
  }, [post]);

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
    // We do teh same checks as if a new post
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
      dispatch(updatePost(currentId, postData));
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
    setCurrentId(null);
    setPostData({
      title: '',
      videoLink: '',
      instructions: '',
    });
  };

  // Get the currentID

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
            Edit a Post
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

export default UpdateForm;
