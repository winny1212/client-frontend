import React from 'react';
import Post from './post/Post';
// import { fetchAllPosts } from '../../api';
// import { CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Posts() {
  return (
    <div>
      <h3>List of Post</h3>
      {/* Will map the posts later once the card is ready */}
      <small>card for post not ready yet</small>
      <Grid container>
        <Grid item>
          <Post />
        </Grid>
        <Grid item>
          <Post />
        </Grid>
        <Grid item>
          <Post />
        </Grid>
      </Grid>
    </div>
  );
}

export default Posts;
