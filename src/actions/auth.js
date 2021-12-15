import { signInUser, signUpUser } from '../api/index.js';
import { AUTH } from '../constants/actionTypes';

// Sign Up
export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    // Login the User
    const { data } = await signInUser(formData);

    dispatch({ type: AUTH, data });

    // Redirect to Home
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

// Sign In
export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    // Sign Up the User
    const { data } = await signUpUser(formData);

    dispatch({ type: AUTH, data });

    // Redirect to Home
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};
