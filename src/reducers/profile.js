import usersData from '../data/usersData';

const profileReducer = (state = { name: '' }, action) => {
  return usersData[0];
};

export default profileReducer;
