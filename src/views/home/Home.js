import React, { useEffect } from 'react';
import Posts from '../../components/posts/Posts';
import { useDispatch } from 'react-redux';
import { getAllPosts } from '../../actions/posts';

// MUI
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';

function Home() {
  const dispatch = useDispatch();

  // fetch & load all posts
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <h1>Home Page</h1>
      <h3>Searchbar</h3>
      <h3>Featured Posts</h3>
      <hr />
      <Posts />
    </Container>
  );
}

export default Home;
