import React from 'react';
import { useSelector } from 'react-redux';
import Post from './post/Post';
import data from '../../data/postsData';
// import { fetchAllPosts } from '../../api';
// import { CircularProgress } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';

function Posts() {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      <h3>List of Posts</h3>
      {/* Will map the posts later once the card is ready */}
      <small>list of posts in cards</small>

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

      <hr />
      <small>test with local fake data</small>
      {data.map((post) => {
        return <p key={post._id}>{post.title}</p>;
      })}
    </div>
  );
}

export default Posts;
