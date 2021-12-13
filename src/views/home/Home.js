import React, { useEffect, useContext } from 'react';
import Posts from '../../components/posts/Posts';
import { useDispatch } from 'react-redux';
import { getAllPosts } from '../../actions/posts';

// UserContext
import { UserContext } from '../../Context/UserContext';

// MUI
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';

function Home() {
  const dispatch = useDispatch();

  const { currentId } = useContext(UserContext);

  // fetch & load all posts
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, currentId]);

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
