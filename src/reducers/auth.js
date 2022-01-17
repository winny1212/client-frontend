import { AUTH, LOGOUT, UPDATE_USER } from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      // localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      localStorage.setItem('profile', JSON.stringify({ ...action.data }));
      return { ...state, authData: action?.data, loading: false, errors: null };
    case LOGOUT:
      // Clear the local storage so we are not logged in.
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };

    case UPDATE_USER:
      // updates user data
      const user = JSON.parse(localStorage.getItem('profile'));

      const newData = { ...user, result: action.payload };
      localStorage.setItem('profile', JSON.stringify(newData));

      return { ...state, result: newData };
    default:
      return state;
  }
};

export default authReducer;
