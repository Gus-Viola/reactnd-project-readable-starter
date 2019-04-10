import { getInitialData } from '../utils/ReadableAPI'
import { receivePosts  from '../utils/posts'
import { receiveComments } from '../actions/comments'
import { receiveCategories } from '../actions/categories'


export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}
