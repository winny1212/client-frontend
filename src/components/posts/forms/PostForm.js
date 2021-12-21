import React, { useState } from 'react';

// Components & Data
import StepsForm from './StepsForm';
// import breeds from '../../../data/breedsData.js';
import FormLayout from '../../shared/FormLayout';
// import FormInput from '../../shared/FormInput';
// import FormHint from '../../shared/FormHint';

// MUI
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
// eslint-disable-next-line
import { StyledBtn, StyledBtnOutlined } from '../../shared/StyledButtons';
import DetailsForm from './DetailsForm';

// {_id, breed, dogSize, author, title, description, steps, image, likes, comments, createdAt}

function PostForm() {
  // Handle dog breeds selection state (has to be handled separately for MUI)
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [toolsValue, setToolsValue] = useState([]);

  const initialPostData = {
    title: '',
    author: '',
    breed: selectedBreed,
    dogSize: '',
    duration: 1,
    description: '',
    tools: [],
    steps: [],
    image: { before: '', after: '' },
    video: '',
  };

  // Post state
  const [postData, setPostData] = useState(initialPostData);

  console.log('-- postData:\n', JSON.stringify(postData, null, 2));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handlePublish = (e) => {
    console.log('Post Published!');
    e.preventDefault();
    // ! Make sure to include breed: selectedBreed!

    // add alert to notify post is published?

    // clear inputs back to initial values

    // redirect page to the new post
  };

  return (
    <FormLayout>
      <form onSubmit={handlePublish} noValidate>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} md={5}>
            <DetailsForm
              handleChange={handleChange}
              postData={postData}
              setPostData={setPostData}
              selectedBreed={selectedBreed}
              setSelectedBreed={setSelectedBreed}
              toolsValue={toolsValue}
              setToolsValue={setToolsValue}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <StepsForm
              handleChange={handleChange}
              postData={postData}
              setPostData={setPostData}
            />
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
