const BASE_URL= '/api/comments';

export function getComment(commentId) {
  return fetch(`${BASE_URL}/${commentId}`)
  .then(res => res.json())
}

export function create(comment, postId) {
  return fetch(`${BASE_URL}/${postId}`, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(comment)
  }).then(res => res.json());
}

export function deleteComment(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}