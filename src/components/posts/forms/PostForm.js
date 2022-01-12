import React, { useState } from 'react';

// Redux State
import { useDispatch } from 'react-redux';

// Dispatch Action
import { createPost } from '../../../actions/posts';

// Components & Data
import PostContextProvider from '../../../context/PostContext';
import StepsForm from './StepsForm';
import BaseLayout from '../../shared/BaseLayout';

// Context
import { usePostContext } from '../../../context/PostContext';

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

  // PostContext consume
  const { handlePostPublish } = usePostContext();

  // Post state
  // const [postData, setPostData] = useState(initialPostData);

  // console.log('-- postData:\n', JSON.stringify(postData, null, 2));

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setPostData({ ...postData, [name]: value });
  // };

  // Clear all inputs to initial state
  // const clearInputs = () => setDetails(initialDetailsData);

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
    <BaseLayout>
      <form onSubmit={handlePublish} noValidate>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} md={5}>
            <DetailsForm />
          </Grid>

          <Grid item xs={12} md={7}>
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
    </BaseLayout>
  );
}

export default PostForm;
