import { fetchAllPosts, createNewPost } from '../api';
import { FETCH_ALL, CREATE } from '../constants/actionTypes';

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

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await createNewPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
