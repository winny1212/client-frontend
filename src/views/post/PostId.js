import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/layout/Header';
// import Post from '../../components/posts/post/Post';

const PostId = () => {
  // define the post/:id params from App.js
  const { postID } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Header title="" />
      <h3>Individual Post View</h3>
      <p>Post ID: {postID}</p>
      {/* <Post /> */}
    </>
  );
};

export default PostId;
