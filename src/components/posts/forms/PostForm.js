import React, { useState } from 'react';

// Redux State
import { useDispatch } from 'react-redux';

// Dispatch Action
import { createPost } from '../../actions/posts';

// Components & Data
import PostContextProvider from '../../../context/PostContext';
import StepsForm from './StepsForm';
import BaseLayout from '../../shared/BaseLayout';

// MUI
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { StyledBtn, StyledBtnOutlined } from '../../shared/StyledButtons';
import DetailsForm from './DetailsForm';

// {_id, breed, dogSize, username, title, duration, description, steps, image, likes, comments, createdAt}

function PostForm() {
  // Invoke Redux State
  const dispatch = useDispatch();

  // Get the current user for the post's username/author
  const currentUser = JSON.parse(localStorage.getItem('profile'));

  // Handle dog breeds selection state (has to be handled separately for MUI)
  const [selectedBreed, setSelectedBreed] = useState(null);

  const initialPostData = {
    title: '',
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

  // Clear all inputs to initial state
  const clearInputs = () => setPostData(initialPostData);

  // Create POST to send to backend
  const handlePublish = (e) => {
    e.preventDefault();

    console.log('Post Published!');

    // ! Make sure to include breed: selectedBreed!

    // add alert to notify post is published?

    // clear inputs back to initial values

    // redirect page to the new post
  };

  return (
    <PostContextProvider>
      <BaseLayout>
        <form onSubmit={handlePublish} noValidate>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} md={5}>
              <DetailsForm
                handleChange={handleChange}
                postData={postData}
                setPostData={setPostData}
                selectedBreed={selectedBreed}
                setSelectedBreed={setSelectedBreed}
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
      </BaseLayout>
    </PostContextProvider>
  );
}

export default PostForm;
