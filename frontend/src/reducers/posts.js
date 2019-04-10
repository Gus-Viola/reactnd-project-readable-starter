import { GET_TOTAL_POSTS, GET_POSTS_BY_CATEGORY, GET_POST, ADD_POST,
  EDIT_POST, DELETE_POST, UPVOTE_POST } from '../actions/posts';

export default function posts(state = {}, action) {
  const { data } = action;

  switch (action.type) {
    case GET_TOTAL_POSTS:
      //return _.mapKeys(data, 'id'); //is this right?
      return { ...state, [data.id]: data };

    case GET_POSTS_BY_CATEGORY:
      return { ...state, [data.id]: data };
    case GET_POST :
      return { ...state, [data.id]: data };
    case ADD_POST:
      return { ...state, [data.id]: data };
    case EDIT_POST:
      return { ...state, [data.id]: data };
    case DELETE_POST :
      return { ...state, [data.id]: data };
    case UPVOTE_POST :
      return { ...state, [data.id]: data };
    default:
      return state;
    }
  };
