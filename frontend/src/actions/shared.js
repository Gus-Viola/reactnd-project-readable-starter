import { getCategories } from '../actions/categories'
import { getTotalPosts }  from '../utils/posts'


export function handleInitialData () {
  return (dispatch) => {
    // return getInitialData()
    //   .then(({ users, tweets }) => {
    //     dispatch(receiveUsers(users))
    //     dispatch(receiveTweets(tweets))
    //     dispatch(setAuthedUser(AUTHED_ID))
    //   })
    return getCategories()
      .then(
        dispatch(getTotalPosts();)
      )
  }
}
