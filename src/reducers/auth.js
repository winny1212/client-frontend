import { AUTH, LOGOUT } from '../constants/actionTypes';

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
    default:
      return state;
  }
};

export default authReducer;
