import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../api';
// eslint-disable-next-line
import { useSelector } from 'react-redux';
import Header from '../../components/layout/Header';
// import Post from '../../components/posts/post/Post';

const PostId = () => {
  // define the post/:id params from App.js
  const { postID } = useParams();
  const location = useLocation();

  const postPath = location.pathname.split('/')[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await API.get('/posts/' + postPath);
      console.log(res);
    };
    getPost();
  }, [postPath]);

  // const navigate = useNavigate();

  // const posts = useSelector((state) => state.postsReducer);

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
