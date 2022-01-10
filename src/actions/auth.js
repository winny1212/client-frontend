import {
  signInUser,
  signUpUser,
  fetchAllUsers,
  fetchSingleUser,
  updateOldUser,
  deleteAUser,
} from '../api/index.js';

import {
  AUTH,
  FETCH_ALL_USERS,
  FETCH_SINGLE_USER,
  UPDATE_USER,
  DELETE_USER,
} from '../constants/actionTypes';

// Sign Up
export const signIn = (formData) => async (dispatch) => {
  try {
    const response = await signInUser(formData);
    // If all is good, get the relevant data and dispatch to state.
    if (response.data.message === 'Wrong Password') {
      console.log('Password is wrong');
    } else if (response.data.message === 'User Does Not Exist') {
      console.log('Username is wrong');
    } else if (response.data.message !== 'Wrong Password') {
      const { data } = response;
      console.log('Token:', data);
      dispatch({ type: AUTH, data });
    }
  } catch (error) {
    console.log(error);
  }
};

// Sign In
export const signUp = (formData) => async (dispatch) => {
  try {
    // Sign Up the User
    const { data } = await signUpUser(formData);

    console.log('Data from Actions/SignUp:', data);

    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};

// New functions
export const getAllUsers = () => async (dispatch) => {
  try {
    // Gets the data
    const { data } = await fetchAllUsers();

    // Send data to out local state
    dispatch({ type: FETCH_ALL_USERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Update an old post
export const updateUser = (id, post) => async (dispatch) => {
  try {
    const { data } = await updateOldUser(id, post);

    dispatch({ type: UPDATE_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Delete a Post
export const deleteUser = (id) => async (dispatch) => {
  try {
    const { deletedToken } = await deleteAUser(id);
    console.log('From actions.posts:', deletedToken);

    dispatch({ type: DELETE_USER, payload: id });
  } catch (error) {
    console.log(error);
  }
};
