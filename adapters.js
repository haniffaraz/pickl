const baseUrl = `http://localhost:3000/`
const userUrl = `${baseUrl}users`   // baseUrl + 'users'
const commentUrl = `${baseUrl}posts/${post_id}/comments` // baseUrl + 'posts/post_id/comments/'
const allCommentsUrl = `${baseUrl}posts/${post_id}/comments`
const allPostsUrl = `${baseUrl}posts`
const postUrl = `${allPostsUrl}/${id}`


const userAdapter = {
  let options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  }

  createUser: function createUser(data) {
    return fetch(userUrl, options)
      .then(resp => resp.json())
  }
}


const commentAdapter = {
  let options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  }

  createComment: function createComment(data) {
    return fetch(commentUrl, options);
      .then(resp => resp.json())
  },

  getAllComments: function getAllComments() {
    return fetch(allCommentsUrl)
      .then(resp => resp.json())
  }
}

const postAdapter = {
  createPost: function createPost(data) {
    let options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    }

    return fetch(allPostsUrl, options)
      .then(resp => resp.json())
  },

  getAllPosts: function showAllPosts() {
    return fetch(allPostsUrl)
      .then(resp => resp.json())
  },

  getPost: function showPost(id) {
    return fetch(postUrl)
      .then(resp => resp.json())
  },

  updatePost: function updatePost(data, id) {
    let options = {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    }

    return fetch(postUrl, options)
      .then(resp => resp.json())
  }
}

const likesAdapter = {
  let options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }

    createLike: function createLike(data) {
      return fetch(postUrl, options)
        .then(resp => resp.json())
    }
  }
}
