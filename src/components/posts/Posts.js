import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// import Post from './post/Post';

// MUI
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import { CircularProgress } from '@mui/material';
import PostCard from './PostCard';

function Posts({ filters, setFilters, sort, setSort }) {
  const posts = useSelector((state) => state.postsReducer);
  console.log('Here are the Posts:', posts);

  // Testing users
  const users = useSelector((state) => state.profileReducer);
  console.log('Here are the Users:', users);

  useEffect(() => {
    setFilters(posts.filter((item) => {}));
  }, [filters]);

  return !posts.length ? (
    <CircularProgress />
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
