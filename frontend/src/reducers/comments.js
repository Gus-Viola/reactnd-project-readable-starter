import { GET_COMMENTS_BY_POST,GET_COMMENT, ADD_COMMENT, EDIT_COMMENT,
  DELETE_COMMENT, UPVOTE_COMMENT } from '../actions/comments';

export default function comments(state = {}, action) {
  const { data } = action;

  switch (action.type) {
    case GET_COMMENTS_BY_POST:
      return {...state, [data.id]: data.data }
    case GET_COMMENT:
      return { ...state, [data.id]: data.data }
    case ADD_COMMENT:
      return {...state, [data.id]: data.data}
    case EDIT_COMMENT:
      return {...state, [data.id]: data.data}
    case DELETE_COMMENT:
      return {...state, [data.id]: data}
    case UPVOTE_COMMENT:
      //certainly wrong, needs to be updated
      return {...state, [data.id]: data}

    default:
      return state
  }
};
