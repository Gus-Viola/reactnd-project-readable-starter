import * as api from '../utils/ReadableAPI';

export const GET_CATEGORIES = 'GET_CATEGORIES';

export function getCategories() {
  return dispatch => {
    api.getCategories().then((data) => {
      return dispatch({
        type: GET_CATEGORIES,
        data,
      });
    });
  };
};
