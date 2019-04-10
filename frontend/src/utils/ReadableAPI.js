//inspired by https://github.com/udacity/reactnd-project-myreads-starter/blob/master/src/BooksAPI.js
const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  Accept:           "application/json",
  "Authorization":  token,
  "Content-Type":   "application/json"
}

//Categories: get all
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

//Posts: get all, get by category, get single, add, edit, delete, upvote
export const getTotalPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json());

export const getPostsByCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(data => data.json());

export const getPost = (postid) =>
  fetch(`${api}/posts/${postid}`, { headers })
    .then(res => res.json());

export const addPost = (post) =>
  fetch(`${api}/posts`, {
    method: "POST",
    headers,
    body: JSON.stringify(post)})
      .then(data => data.json());

export const editPost = (postid, content) =>
  fetch(`${api}/posts/${postid}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(content)})
      .then(res => res.json());

export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: "DELETE",
    headers})
      .then(res => res.json());

export const upvotePost = (postid, content) =>
  fetch(`${api}/posts/${postid}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(content)})
      .then(res => res.json());

//Comments: get all by post, get single, add, edit, delete, upvote

export const getCommentsByPost = (postid) =>
  fetch(`${api}/posts/${postid}/comments`, {
    headers })
      .then(res => res.json());

export const getComment = (commentid) =>
  fetch(`${api}/comments/${commentid}`, {
    headers })
      .then(res => res.json());

export const addComment = (comment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify(comment)})
      .then(res => res.json());

export const editComment = (commentid, content) =>
  fetch(`${api}/comments/${commentid}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(content)})
      .then(res => res.json());

export const deleteComment = (commentid) =>
  fetch(`${api}/comments/${commentid}`, {
    method: 'DELETE',
    headers})
      .then(res => res.json());

export const upvoteComment = (commentid, content) =>
  fetch(`${api}/comments/${commentid}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(content)})
      .then(res => res.json());

// export const get = (bookId) =>
//   fetch(`${api}/books/${bookId}`, { headers })
//     .then(res => res.json())
//     .then(data => data.book)
//
// export const getAll = () =>
//   fetch(`${api}/books`, { headers })
//     .then(res => res.json())
//     .then(data => data.books)
//
// export const update = (book, shelf) =>
//   fetch(`${api}/books/${book.id}`, {
//     method: 'PUT',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ shelf })
//   }).then(res => res.json())
//
// export const search = (query) =>
//   fetch(`${api}/search`, {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ query })
//   }).then(res => res.json())
//     .then(data => data.books)
