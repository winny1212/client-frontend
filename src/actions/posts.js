import {
  fetchAllPosts,
  createNewPost,
  updateOldPost,
  deleteAPost,
} from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

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
export const getAllPosts = () => async (dispatch) => {
  try {
    // Gets the data
    const { data } = await fetchAllPosts();

    // Send data to out local state
    dispatch({ type: FETCH_ALL, payload: data });
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
