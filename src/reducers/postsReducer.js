import { FETCH_ALL, CREATE } from '../constants/actionTypes';

// This is where the actual data is being sent. In line 4 is where the posts for now stay.
const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return posts;
    case CREATE:
      return posts;
    default:
      return posts;
  }
};

export default postsReducer;
