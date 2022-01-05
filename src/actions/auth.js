import { signInUser, signUpUser } from '../api/index.js';
import { AUTH } from '../constants/actionTypes';

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
