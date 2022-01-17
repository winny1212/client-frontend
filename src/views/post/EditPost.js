import React from 'react';
import Header from '../../components/shared/Header';
import EditPostForm from '../../components/posts/forms/EditPostForm';

// MUI
import Container from '@mui/material/Container';

const EditPost = () => {
  return (
    <>
      <Header title="Edit Post" />
      <Container maxWidth="lg">
        <EditPostForm />
      </Container>
    </>
  );
};

export default EditPost;
