import React from 'react';
// import { useDispatch } from 'react-redux';

// {_id, breed, dogSize, author, title, description, steps, image, likes, comments, createdAt}

function Post({ post }) {
  // const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <h6>Ind Post</h6>
      <h3>{post.title}</h3>
    </div>
  );
}

export default Post;
