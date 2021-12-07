import { fetchAllPosts } from '../api';
import { FETCH_ALL } from '../constants/actionTypes';

// This is where we can make requests to the backend.
// All of these function will be used throughout our app, whenever needed.
// They can be called whenever using Redux's Dispatch hook.

// This function does two things
// (1) makes a req to the backend and gets all post.
// (2) Sends all of that data to our local state (redux)
export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await fetchAllPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
