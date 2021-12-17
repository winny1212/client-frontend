import React, { useState } from 'react';

// Components
import StepsForm from './StepsForm';

// MUI
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// {_id, breed, dogSize, author, title, description, steps, image, likes, comments, createdAt}

const initialPostData = {
  title: '',
  author: '',
  breed: '',
  dogSize: '',
  duration: '',
  description: '',
  tools: [],
  steps: [],
  image: { before: '', after: '' },
  video: '',
};

function PostForm() {
  // Post state
  const [postData, setPostData] = useState(initialPostData);
  console.log(postData);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Grid
        container
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={4}>
          <h3>General Post Info</h3>
        </Grid>
        <Grid item xs={12} md={8}>
          <StepsForm />
        </Grid>
        <Grid item xs={12} md={12}>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="outlined">Save Draft</Button>
            <Button variant="contained">Publish</Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default PostForm;
