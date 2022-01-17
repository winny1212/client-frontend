import usersData from '../data/usersData';

// create a usersData Reducer and return the usersData
// it is imported at Profile.js
/*
  const profileReducer = (state = null, action) => {
    return usersData[0];

    // user is not login
    //return null;
  };
*/

// New Profile Reducer
import {
  FETCH_ALL_USERS,
  UPDATE_USER,
  DELETE_USER,
  FETCH_SINGLE_USER,
} from '../constants/actionTypes';

const profileReducer = (users = [], action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.payload;
    case FETCH_SINGLE_USER:
      return action.payload;
    case UPDATE_USER:
      // This action.payload is the new updated post.
      return users.map((user) =>
        user._id === action.payload._id ? action.payload : user,
      );
    case DELETE_USER:
      return users.filter((user) => user._id === action.payload);
    default:
      return users;
  }
};

export default profileReducer;
