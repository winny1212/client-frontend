import { signInUser, signUpUser } from '../api/index.js';
import { AUTH } from '../constants/actionTypes';

// Sign Up
export const signIn = (formData) => async (dispatch) => {
  try {
    // Login the User
    const { data } = await signInUser(formData);

    dispatch({ type: AUTH, data });
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
