import usersData from '../data/usersData';

//create a usersData Reducer and return the usersData
// it is imported at Profile.js
const profileReducer = (state = null, action) => {
  return usersData[0];

  // user is not login
  //return null;
};

export default profileReducer;
