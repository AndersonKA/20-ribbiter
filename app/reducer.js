import { combineReducers } from 'redux';
import userResource from './resources/user';
import { users } from './resources/user';
import { posts } from './resources/post';

export default combineReducers({
  users: userResource.reducer,
  posts: userResource.reducer,
});
