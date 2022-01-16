import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// MUI
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
    <>
      <Masonry columns={{ xs: 1, md: 2, lg: 3 }} spacing={2}>
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </Masonry>
    </>
  );
}

export default Posts;
