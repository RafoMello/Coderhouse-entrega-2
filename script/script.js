let formInput = document.querySelectorAll('.form-input') // getting the form input
let formgameSubmit = document.getElementById('new-game-form') // getting the DOM
let cardContainer = document.querySelector('.card-container') // getting the card container
let totalgames = document.querySelector('.total-games') // getting total games DOM

// array for saving game data
let myLibrary = []

function gameentry(gametitle, gameprice, consoleplatform, hasBeencompleted) {
  this.gameID = myLibrary.length
  this.gametitle = gametitle
  this.gameprice = gameprice
  this.consoleplatform = consoleplatform
  this.hasBeencompleted = hasBeencompleted
}
gameentry.prototype.savegame = function() {
  // arrange the object to push
  let gameToSave = {
    gameID: this.gameID,
    gametitle: this.gametitle,
    gameprice: this.gameprice,
    consoleplatform: this.consoleplatform,
    hasBeencompleted: this.hasBeencompleted
  }

  myLibrary.unshift(gameToSave)

  render() // rendering list of games
}

function addgameToLibrary(e) {
  e.preventDefault() // preventing browser to reload

  let gametitle = e.target[0].value // getting game title
  let gameprice = e.target[1].value // getting game price
  let consoleplatform = e.target[2].value // getting Console Plataform
  let hasBeencompleted = e.target[3].value // getting has been Completed

  let insertgame = new gameentry(gametitle, gameprice, consoleplatform, hasBeencompleted)

  insertgame.savegame()

  // close the modal after insert the game
  modal.style.display = "none"

  // clear the form after submit
  formInput.forEach(function(item, index){
    item.value = ''
  })

  let deleteButton = document.querySelectorAll('.delete-button') // getting the delete button
  deleteButton.forEach(key => key.addEventListener('click', deleteFunc))
}

// render array to HTML
function render() {
  // remove card before adding new one
  cardContainer.innerHTML = ''

  myLibrary.forEach(function(currentValue, index) {
    cardContainer.innerHTML += cardElement(currentValue)
  })

  // rendering total games
  rendergames()
}

// rendering total of the games
function rendergames(){
  totalgames.innerHTML = myLibrary.length
}

// card element
function cardElement(data) {
  return `
  <div class="card">
    <div class="card-top">
      <div class="content">
        <div class="left-side">
          <p>${data.hasBeencompleted}</p>
        </div> <!-- left-side -->
        <div class="right-side">
          <p class="title"><b>${data.gametitle}</b></p>
          <p>${data.consoleplatform} - ${data.gameprice} Dolars</p>
        </div> <!-- right-side -->
      </div>
    </div> <!-- card-top -->
    <div class="card-bottom">
      <button class="completed-button"><b>completed</b></button>
      <button class="delete-button" data-game="${data.gameID}${data.pages}">delete</button>
    </div> <!-- card-bottom -->
  </div> <!-- card -->
  `
}

// function for deleting the game data
function deleteFunc(e){
  
  console.log(e.target.dataset.game)

}

render()

// form submit eventListener
formgameSubmit.addEventListener('submit', addgameToLibrary)
