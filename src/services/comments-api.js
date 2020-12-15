const BASE_URL= '/api/comments';

  export function create(comment) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(comment)
    }).then(res => res.json());
  }

  export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }