import React from 'react';
import { useDispatch } from 'react-redux';

// {_id, breed, dogSize, author, title, description, steps, image, likes, comments, createdAt}

function Post({ post }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Ind Post</h2>
      <h2>{post.title}</h2>
    </div>
  );
}

export default Post;
