import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// MUI
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { CircularProgress } from '@mui/material';
import PostCard from './PostCard';

function Posts() {
  const { posts } = useSelector((state) => state.postsReducer);
  console.log('Here are the posts:', posts);

  // Testing users
  const users = useSelector((state) => state.profileReducer);
  console.log('Here are the Users:', users);

  //setup the initial state of filteredBlogs
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  return !posts?.length ? (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  ) : (
    <Grid container direction="row" spacing={2} alignItems="stretch">
      {posts.map((post) => (
        <Grid item xs={12} md={6} lg={4} key={post._id}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
