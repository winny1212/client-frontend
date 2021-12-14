import React, { useEffect, useContext } from 'react';
import Posts from '../../components/posts/Posts';
import { useDispatch } from 'react-redux';
import { getAllPosts } from '../../actions/posts';

// UserContext
import { UserContext } from '../../Context/UserContext';

// MUI
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import global from '../../components/styles/globalStyle';

function Home() {
  const dispatch = useDispatch();

  const { currentId } = useContext(UserContext);

  // fetch & load all posts
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, currentId]);

  return (
    <>
      <Box
        component="header"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 150,
          bgcolor: global.accentYellow,
        }}
      >
        <Typography variant="headerTitle" sx={{ p: '1rem' }}>
          Find tips and tricks to groom your beloved pets
        </Typography>
      </Box>
      <Container maxWidth="lg">
        <h3>Searchbar</h3>
        <h3>Featured Posts</h3>
        <Posts />
      </Container>
    </>
  );
}

export default Home;
