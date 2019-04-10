import * as api from '../utils/ReadableAPI';

export const GET_COMMENTS_BY_POST = 'GET_COMMENTS_BY_POST';
//is this function right?
export function getCommentsByPost(postid) {
  return dispatch => {
    api.getCommentsByPost(postid).then((data) => {
      return dispatch({
        type: GET_COMMENTS_BY_POST,
        data,
      });
    });
  };
};

export const GET_COMMENT = 'GET_COMMENT';

export function getComment(commentid) {
  return dispatch => {
    api.getComment(commentid).then((data) => {
      return dispatch({
        type: GET_COMMENT,
        data,
      });
    });
  };
};

export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(comment) {
  return dispatch => {
    api.addComment(comment).then((data) => {
      return dispatch({
        type: ADD_COMMENT,
        data,
      });
    }).then(() => {dispatch(getCommentsByPost(comment.parentId))});
  };
};

export const EDIT_COMMENT = 'EDIT_COMMENT';

export function editComment(commentid, content) {
  return dispatch => {
    api.editComment(commentid, content).then((data) => {
      return dispatch({
        type: EDIT_COMMENT,
        data,
      });
    }).then(() => {dispatch(getComment(commentid))});
  };
};

export const DELETE_COMMENT = 'DELETE_COMMENT';

export function deleteComment(commentid) {
  return dispatch => {
    api.deleteComment(commentid).then((data) => {
      return dispatch({
        type: DELETE_COMMENT,
        data,
      });
    }).then(() => {dispatch(getCommentsByPost(commentid.parentId))});
  };
};

export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';

export function upvoteComment(commentid, content) {
  return dispatch => {
    api.upvoteComment(commentid, content).then((data) => {
      return dispatch({
        type: UPVOTE_COMMENT,
        data,
      });
    }).then(() => {dispatch(getComment(commentid))});
  };
};
