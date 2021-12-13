import { FETCH_ALL, CREATE, UPDATE } from '../constants/actionTypes';

// This is where the actual data is being sent. In line 4 is where the posts for now stay.
const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      // This action.payload is the new updated post.
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post,
      );
    default:
      return posts;
  }
};

export default postsReducer;
