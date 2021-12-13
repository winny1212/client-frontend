import React, { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';
// import { useDispatch } from 'react-redux';

// {_id, breed, dogSize, author, title, description, steps, image, likes, comments, createdAt}

function Post({ post }) {
  // const dispatch = useDispatch();

  // For the Edit Button.
  const [currentId, setCurrentId] = useContext(UserContext);

  return (
    <div>
      <h6>Ind Post</h6>
      <h3>{post.title}</h3>
    </div>
  );
}

export default Post;
