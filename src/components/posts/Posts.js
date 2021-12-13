import React from 'react';
import { useSelector } from 'react-redux';
import Post from './post/Post';

// MUI
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import { CircularProgress } from '@mui/material';

function Posts() {
  const posts = useSelector((state) => state.postsReducer);
  console.log(`-- checking --\n${posts}`);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container direction="row" spacing={2} alignItems="stretch">
      {posts.map((post) => (
        <Grid item xs={12} md={2} lg={3} key={post._id}>
          <Box sx={{ bgcolor: '#fff' }}>
            <Post post={post} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
