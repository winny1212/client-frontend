import React, { useState } from 'react';

// Components
import StepsForm from './StepsForm';

// MUI
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { StyledBtn, StyledBtnOutlined } from '../../shared/StyledButtons';
import DetailsForm from './DetailsForm';
import FormLayout from '../../shared/FormLayout';

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
  createdAt: '',
};

function PostForm() {
  // Post state
  const [postData, setPostData] = useState(initialPostData);
  console.log(postData);

  const handlePublish = (e) => {
    e.preventDefault();
    console.log('Post Published!');
  };

  return (
    <FormLayout>
      <Grid
        container
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={4}>
          <DetailsForm />
        </Grid>

        <Grid item xs={12} md={8}>
          <StepsForm />
        </Grid>

        <Grid item xs={12} md={12}>
          <Stack spacing={2} direction="row" justifyContent="center">
            <StyledBtnOutlined>Save Draft</StyledBtnOutlined>
            <StyledBtn onSubmit={handlePublish}>Publish</StyledBtn>
          </Stack>
        </Grid>
      </Grid>
    </FormLayout>
  );
}

export default PostForm;
