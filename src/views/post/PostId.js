import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { API } from '../../api';
// eslint-disable-next-line
import { useSelector } from 'react-redux';
import Header from '../../components/layout/Header';
import Post from '../../components/posts/post/Post';
import CommentSection from './CommentSection';

// MUI
import Container from '@mui/material/Container';

const PostId = () => {
  // define the post/:id params from App.js
  const { postID } = useParams();
  // const location = useLocation();
  // const postPath = location.pathname.split('/')[2];

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await API.get('/posts/' + postID);
      // console.log(res.data);
      setPost(res.data);
    };
    getPost();
  }, [postID]);

  // const navigate = useNavigate();

  // const posts = useSelector((state) => state.postsReducer);

  return (
    <>
      <Header title={post.title} />
      <Container maxWidth="lg">
        <Post post={post} />
        {/* <h3>Comment Form</h3>
        <h3>Comments</h3> */}
        <CommentSection post={post} postID={postID} />
      </Container>
    </>
  );
};

export default PostId;
