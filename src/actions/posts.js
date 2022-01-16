import { useNavigate } from 'react-router';
import {
  fetchAllPosts,
  fetchPostsBySearch,
  createNewPost,
  updateOldPost,
  deleteAPost,
  likeAPost,
  commentAPost,
  fetchSingleUser,
} from '../api';

import {
  FETCH_ALL,
  FETCH_BY_SEARCH,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  COMMENT,
} from '../constants/actionTypes';

// This is where we can make requests to the backend.
// All of these function will be used throughout our app, whenever needed.
// They can be called whenever using Redux's Dispatch hook.

/*
 getAllPosts
 This function does two things
 (1) makes a request to the backend server and gets all post.
 (2) Sends all of that data to our local state (redux)
 (3) We are also using Redux thunk, that is why we can async.
*/

export const getAllPosts = (page) => async (dispatch) => {
  try {
    // Gets the data
    const { data } = await fetchAllPosts(page);
    console.log('Data we got From getAllPosts:', data);

    // Send data to out local state
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Get post by search
export const getPostBySearch = (searchQuery) => async (dispatch) => {
  try {
    // Gets the data
    const { data } = await fetchPostsBySearch(searchQuery);
    const posts = data.posts;

    // console.log('Data we got From getPostBySearch:', posts);
    // console.log('No need for payload.data, just payload');

    if (data.message === 'No Results') {
      alert('No posts with that name....');
    }

    if (posts) {
      dispatch({ type: FETCH_BY_SEARCH, payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};

// Create new post
export const createPost = (post) => async (dispatch) => {
  try {
    // We await the data we get back from backend
    const { data } = await createNewPost(post);
    // Update the state with the backend.
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Update an old post
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await updateOldPost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Delete a Post
export const deletePost = (id) => async (dispatch) => {
  try {
    const { deletedToken } = await deleteAPost(id);
    console.log('From actions.posts:', deletedToken);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

// Like a post
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await likeAPost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Comment on Post
export const commentPost = (comment, id) => async (dispatch) => {
  try {
    const { data } = await commentAPost(comment, id);

    console.log('commentPost data:', data);

    dispatch({ type: COMMENT, payload: data });

    return data.comments;
  } catch (error) {
    console.log(error);
  }
};
