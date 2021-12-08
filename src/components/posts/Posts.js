import React from 'react';
import Post from './post/Post';
// import { CircularProgress } from '@mui/material';

function Posts() {
  return (
    <div>
      <h3>List of Post</h3>
      {/* Will map the posts later once the card is ready */}
      <small>card for post not ready yet</small>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
