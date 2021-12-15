import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import authReducer from './auth';

// CombineReducers does what it says, it will combine many reducers. Otherwise, files will be too big.
export default combineReducers({
  postsReducer,
  authReducer,
});
