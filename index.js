document.addEventListener('DOMContentLoaded', onLoad())

const container = document.querySelector('.container')
const container = document.querySelector('.categories')
const container = document.querySelector('.games')


function postTemplate(post) {
  return
  `<div>
      <p>${post.home_team.name}</p>
      <p>${post.away_team.name}</p>
      <p>${post.post_likes}</p>
    </div>`

}


postAdapter.getAllPosts()
  .then(resp => {
    resp.forEach
  })
