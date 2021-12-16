import usersData from '../data/usersData';

//create a usersData Reducer and return the usersData
// it is imported at Profile.js
const profileReducer = (state = { name: '' }, action) => {
  return usersData[0];
};

export default profileReducer;
