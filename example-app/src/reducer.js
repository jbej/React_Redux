import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './users.js';

export const initialState = {
  comments: [],
  users: []
};

export const reducer = combineReducers({
  comments,
  users
});

export default reducer;