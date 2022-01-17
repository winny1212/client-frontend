import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { API } from '../../api';
// eslint-disable-next-line
import { useSelector } from 'react-redux';
import Header from '../../components/shared/Header';
import Post from '../../components/posts/post/Post';
import CommentSection from './CommentSection';

// MUI
import Container from '@mui/material/Container';

import { useDispatch } from 'react-redux';
import { getAuthor } from '../../actions/auth';

const PostId = () => {
  const dispatch = useDispatch();
  // define the post/:id params from App.js
  const { postID } = useParams();
  // const location = useLocation();
  // const postPath = location.pathname.split('/')[2];

  const [post, setPost] = useState({});
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await API.get('/posts/' + postID);
      // console.log(res.data);
      setPost(res.data);
    };
    getPost();

    const user = dispatch(getAuthor(post.authorId));
    setAuthor(user);
  }, [postID, post.authorId, dispatch]);

  console.log('POST is:', post);
  console.log('POST user ID is:', post.authorId);

  // const navigate = useNavigate();

  // const posts = useSelector((state) => state.postsReducer);

  return (
    <>
      <Header title={post.title} />
      <Container maxWidth="lg">
        <Post post={post} author={author} />
        {/* <h3>Comment Form</h3>
        <h3>Comments</h3> */}
        <CommentSection post={post} postID={postID} />
      </Container>
    </>
  );
};

export default PostId;
