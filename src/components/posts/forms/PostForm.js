import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Redux State
import { useDispatch } from 'react-redux';

// Dispatch Action
import { createPost } from '../../../actions/posts';

// Components & Data
import StepsForm from './StepsForm';
import DetailsForm from './DetailsForm';
import BaseLayout from '../../shared/BaseLayout';
import { StyledBtn, StyledBtnOutlined } from '../../shared/StyledButtons';
import Hr from '../../shared/Hr';
import HelperText from '../../shared/HelperText';

// Context
import { usePostContext } from '../../../context/PostContext';

// MUI
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// {_id, breed, dogSize, username, title, duration, description, steps, image, likes, comments, createdAt}

function PostForm() {
  // Invoke Redux State
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // PostContext consume
  const {
    postData,
    details,
    instructions,
    selectedBreed,
    authorId,
    stepsTempLocal,
    setSelectedBreed,
    clearInputs,
    loading,
    setLoading,
  } = usePostContext();

  // Local states
  const [progress, setProgress] = useState(0);

  // Get the current user for the post's username/author
  const currentUser = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    console.log('--CURRENT USER ID: ', authorId);
  }, [authorId]);

  // listening to final postData and sends to API
  // !TODO temporary fix, dispatch should be inside handlePostPublish
  // useEffect(() => {
  //   console.log('useEffect\n-- postData:\n', postData);

  //   // Only CREATE POST when postData is ready
  //   if (Object.entries(postData).length !== 0) dispatch(createPost(postData));
  // }, [postData, dispatch]);

  // Create POST to send to backend
  const handlePostPublish = async (e) => {
    e.preventDefault();

    setLoading(true);
    const newPost = {
      ...postData,
      ...details,
      steps: instructions,
      breed: selectedBreed.label,
      authorId: authorId,
    };

    // create post
    dispatch(createPost(newPost));
    // clear inputs back to initial values
    clearInputs();
    // clear temporary local storage for steps
    localStorage.removeItem(stepsTempLocal);
    // set breed back to null
    setSelectedBreed(null);
    console.log('-- New postData Published! --');
    console.log('-- newPost: ', newPost);
    setLoading(false);
    navigate('/');
  };

  return (
    <>
      <BaseLayout>
        <form onSubmit={handlePostPublish} noValidate>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} md={5}>
              <DetailsForm setProgress={setProgress} progress={progress} />
            </Grid>

            <Grid item xs={12} md={7}>
              <Stack>
                <StepsForm />
                <Hr />
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                  sx={{ mt: 3 }}
                >
                  {instructions.length >= 3 && progress === 100 ? (
                    // User can only publish when there are at least 3 steps and one photo is uploaded
                    <StyledBtn type="submit" size="large">
                      Publish Post
                    </StyledBtn>
                  ) : (
                    <>
                      <Typography variant="h7" sx={{ textAlign: 'center' }}>
                        Ensure to include a photo and the minimum grooming
                        instructions!
                      </Typography>
                      <StyledBtn disabled type="submit" size="large">
                        Publish Post
                      </StyledBtn>
                    </>
                  )}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </BaseLayout>
    </>
  );
}

export default PostForm;
