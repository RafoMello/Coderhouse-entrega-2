// Open the Modal Window
let modal = document.getElementById("modal-form")

// Create Variable that Opens Modal Button
let btn = document.getElementById("modal-button")

// Busca elemento para cerrar modal
let span = document.querySelector(".close")

// when the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block"
}

// when the user clicks on the close button, close the modal
span.onclick = function() {
  modal.style.display = "none"
}
