import React, { useState, useEffect } from 'react';

// Redux State
import { useDispatch } from 'react-redux';

// Dispatch Action
import { createPost } from '../../../actions/posts';

// Components & Data
import StepsForm from './StepsForm';
import BaseLayout from '../../shared/BaseLayout';
import { StyledBtn, StyledBtnOutlined } from '../../shared/StyledButtons';
import DetailsForm from './DetailsForm';

// Context
import { usePostContext } from '../../../context/PostContext';
import { useUserContext } from '../../../context/UserContext';

// MUI
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

// {_id, breed, dogSize, username, title, duration, description, steps, image, likes, comments, createdAt}

function PostForm() {
  // Invoke Redux State
  const dispatch = useDispatch();

  // Get the current user for the post's username/author
  const currentUser = JSON.parse(localStorage.getItem('profile'));

  // PostContext consume
  const { postData, handlePostPublish } = usePostContext();
  // UserContext consume
  const { firebase } = useUserContext();

  // listening to final postData and sends to API
  // !TODO temporary fix, dispatch should be inside handlePostPublish
  useEffect(() => {
    console.log('useEffect\n-- postData:\n', postData);

    // Only CREATE POST when postData is ready
    if (Object.entries(postData).length !== 0) dispatch(createPost(postData));
  }, [postData, dispatch]);

  const test = () => {};

  return (
    <>
      <BaseLayout>
        {/* <form onSubmit={handlePostPublish} noValidate> */}
        <form onSubmit={test} noValidate>
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
    </>
  );
}

export default PostForm;
