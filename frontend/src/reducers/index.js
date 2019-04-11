import { combineReducers } from 'redux';
import categories from './categories';
import posts from './posts';
import comments from './comments';


export default combineReducers({
  categories,
  posts,
  comments
});

//this file has to be named index.js so that the default export works
