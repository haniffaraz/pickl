const container = document.querySelector('#container')
const categories = document.querySelector('#categories')
const games = document.querySelector('#games')
// const cardBody = document.querySelector('.card-body')

document.addEventListener('DOMContentLoaded', onLoad)

function onLoad() {
  renderGames()
}

function postTemplate(team) {
  return `<h5 class="card-title">${team.abbreviation} Votes</h5>
    <p class="card-text">${team.name} vs. ${team.city}</p>`
}


function renderGames() {
  postAdapter.getAllPosts()
    .then(games => {
      games.forEach(game => {
        getTeam(game.home_team_id)
        getTeam(game.away_team_id)
      })
    })
}


function getTeam(id) {
  teamAdapter.oneTeam(id)
    .then(team => {
      let aTeam = postTemplate(team)

      document.querySelector('.card-body').innerHTML = aTeam
  })
}
