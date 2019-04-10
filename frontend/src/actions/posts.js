import * as api from '../utils/ReadableAPI';

export const GET_TOTAL_POSTS = 'GET_TOTAL_POSTS';

export function getTotalPosts() {
  return dispatch => {
    api.getTotalPosts().then((data) => {
      return dispatch({
        type: GET_TOTAL_POSTS,
        data,
      });
    });
  };
};

export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
//is this function right?
export function getPostsByCategory(category) {
  return dispatch => {
    api.getPostsByCategory(category).then((data) => {
      return dispatch({
        type: GET_POSTS_BY_CATEGORY,
        data,
      });
    });
  };
};

export const GET_POST = 'GET_POST';

export function getPost(postid) {
  return dispatch => {
    api.getPost(postid).then((data) => {
      return dispatch({
        type: GET_POST,
        data,
      });
    });
  };
};

export const ADD_POST = 'ADD_POST';

export function addPost(post) {
  return dispatch => {
    api.addPost(post).then((data) => {
      return dispatch({
        type: ADD_POST,
        data,
      });
    }).then(() => {dispatch(getTotalPosts())});
  };
};

export const EDIT_POST = 'EDIT_POST';

export function editPost(postid, content) {
  return dispatch => {
    api.editPost(postid, content).then((data) => {
      return dispatch({
        type: EDIT_POST,
        data,
      });
    }).then(() => {dispatch(getPost(postid))});
  };
};

export const DELETE_POST = 'DELETE_POST';

export function deletePost(postid) {
  return dispatch => {
    api.deletePost(postid).then((data) => {
      return dispatch({
        type: DELETE_POST,
        data,
      });
    }).then(() => {dispatch(getTotalPosts())});
  };
};

export const UPVOTE_POST = 'UPVOTE_POST';

export function upvotePost(postid, content) {
  return dispatch => {
    api.upvotePost(postid, content).then((data) => {
      return dispatch({
        type: UPVOTE_POST,
        data,
      });
    }).then(() => {dispatch(getPost(postid))});
  };
};
