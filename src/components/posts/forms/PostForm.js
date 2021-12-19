import React, { useState } from 'react';

// Components & Data
import StepsForm from './StepsForm';
import breeds from '../../../data/breedsData.js';

// MUI
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// import Paper from '@mui/material/Paper';
// eslint-disable-next-line
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
};

function PostForm() {
  // Post state
  const [postData, setPostData] = useState(initialPostData);
  console.log(postData);

  const handleChange = (e) => {};

  const handlePublish = (e) => {
    console.log('Post Published!');
    e.preventDefault();
  };

  return (
    <FormLayout>
      <form onSubmit={handlePublish}>
        <Grid
          container
          direction="row"
          spacing={3}
          // alignItems="center"
          // justifyContent="center"
        >
          <Grid item xs={12} md={4}>
            <DetailsForm
              onChange={handleChange}
              postData={postData}
              setPostData={setPostData}
              breeds={breeds}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <StepsForm />
          </Grid>

          <Grid item xs={12} md={12}>
            <Stack spacing={2} direction="row" justifyContent="center">
              {/* <StyledBtnOutlined>Save Draft</StyledBtnOutlined> */}
              <StyledBtn type="submit">Publish Post</StyledBtn>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </FormLayout>
  );
}

export default PostForm;
