import React from 'react';
import Header from '../../components/layout/Header';
import PostForm from '../../components/posts/forms/PostForm';

// MUI
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

const NewPost = () => {
  return (
    <>
      <Header title="New Post" />
      <Container maxWidth="lg">
        <PostForm />
      </Container>
    </>
  );
};

export default NewPost;
