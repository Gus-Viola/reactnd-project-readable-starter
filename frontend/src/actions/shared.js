import { getCategories } from '../actions/categories'
import { getTotalPosts }  from '../actions/posts'


// export function handleInitialData () {
//   return (dispatch) => {
//     return getInitialData()
//       .then(({ users, tweets }) => {
//         dispatch(receiveUsers(users))
//         dispatch(receiveTweets(tweets))
//         dispatch(setAuthedUser(AUTHED_ID))
//       })
//     return getTotalPosts()
//       .then(
//         dispatch(getTotalPosts())
//       )
//   }
// }

export function handleInitialData () {
  return (dispatch) => {
        getTotalPosts()(dispatch);
       getCategories()(dispatch);
  }
}
