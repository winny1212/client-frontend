import React from 'react';
import { useSelector } from 'react-redux';
import Post from './post/Post';
// import { CircularProgress } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';

function Posts() {
  const posts = useSelector((state) => state.postsReducer);
  console.log(`-- checking --\n${posts}`);

  return (
    <div>
      <h3>List of Posts (in cards)</h3>
      {/* Will map the posts later once the card is ready */}

      {/* <Grid container>
        <Grid item>
          <Post />
        </Grid>
        <Grid item>
          <Post />
        </Grid>
        <Grid item>
          <Post />
        </Grid>
      </Grid> */}
      <hr />

      <small>test with data fetched from server</small>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <Post post={post} />
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
